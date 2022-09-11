import { Camera, CameraType } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Button, Text, View, Image, VStack, HStack } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import fire from "../../Firebase/Firebase";
import "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

export default function CameraScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [flashModeType, setFlashModeType] = useState("off");
  const [isUploading, setIsUploading] = useState(false);

  const takePicture = async () => {
    console.log("taking picture");
    if (camera) {
      const data = await camera.takePictureAsync();
      setImage(data.uri);
      console.log("took picture");
      console.log(data.uri);

    }
  };

  const uploadImage = async () => {
    setIsUploading(true);

    const uri = image;
    const res = await fetch(uri);

    const bytes = await res.blob();

    const storage = getStorage(fire);
    const storageRef = ref(
      storage,
      `post/${fire.auth().currentUser.uid}/${Math.random().toString(36)}`
    );
    await uploadBytesResumable(storageRef, bytes);

    setIsUploading(false);
    retakePicture();
    navigation.navigate("Feed");

  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <SafeAreaView>
        <VStack
          space={10}
          alignItems={"center"}
          justifyContent="center"
          height="100%"
        >
          <Text fontSize={30} mx={5} bold style={{ textAlign: "center" }}>
            We need your permission to show the camera
          </Text>
          <Button
            size={"lg"}
            style={{
              backgroundColor: "black",
              borderRadius: 18,
              width: "50%",
            }}
            onPress={requestPermission}
            title="grant permission"
          >
            Grant app permission.
          </Button>
        </VStack>
      </SafeAreaView>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  function toggleFlashMode() {
    if (flashModeType === "torch") {
      setFlashModeType("off");
    } else {
      setFlashModeType("torch");
    }
  }

  function retakePicture() {
    setImage(null);
  }

  return (
    <SafeAreaView>
      <VStack alignItems={"center"} space={3} mt={8}>
        <Text bold fontSize={30} style={{ color: "#AAD6A0" }}>
          Take a Flik!
        </Text>
        <View width={"364px"} height={"420px"} style={{ borderRadius: "13px" }}>
          {image ? (
            <Image
              alt="Flik picture"
              source={{ uri: image }}
              style={{ flex: 1 }}
            />
          ) : (
            <Camera
              flashMode={flashModeType}
              type={type}
              style={{ flex: 1, borderRadius: "13px" }}
              ref={(ref) => setCamera(ref)}
            />
          )}

        </View>
        {image ? (
          <HStack space={5} alignItems={"center"}>
            <Ionicons
              onPress={retakePicture}
              name="ios-trash-bin"
              size={30}
              color="black"
              style={{ marginTop: 50 }}
            />
            <Text
              style={{ marginTop: 50 }}
              bold
              fontSize={40}
              onPress={uploadImage}
            >
              {isUploading ? "Uploading Flik..." : "Upload Flik"}
            </Text>
          </HStack>
        ) : (
          <HStack style={{ marginTop: 40 }} space={8} alignItems={"center"}>
            <TouchableOpacity onPress={toggleFlashMode}>
              <Entypo name="flash" size={40} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <Entypo name="circle" size={100} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraType}>
              <Ionicons name="camera-reverse-outline" size={40} color="black" />
            </TouchableOpacity>
          </HStack>
        )}
      </VStack>
    </SafeAreaView>
  );
}

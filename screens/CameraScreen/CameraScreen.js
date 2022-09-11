import { Camera, CameraType } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import fire from "../../Firebase/Firebase";
// import "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";

require("firebase/storage");

import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
      console.log(data.uri);
    }
  };

  const uploadImage = async () => {
    const uri = image;
    const res = await fetch(uri);

    const bytes = await res.blob();

    const storage = getStorage(fire);
    const storageRef = ref(
      storage,
      `post/${fire.auth().currentUser.uid}/${Math.random().toString(36)}`
    );
    await uploadBytesResumable(storageRef, bytes);
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </SafeAreaView>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ratio={"1:1"}
        ref={(ref) => setCamera(ref)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => takePicture()}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => uploadImage()}>
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

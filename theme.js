import { extendTheme } from "native-base";
import {
  useFonts,
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from "@expo-google-fonts/outfit";

export const theme = extendTheme({
  fontConfig: {
    Outfit: {
      100: {
        normal: "Outfit_100Thin",
      },
      200: {
        normal: "Outfit_200ExtraLight",
      },
      300: {
        normal: "Outfit_300Light",
      },
      400: {
        normal: "Outfit_400Regular",
      },
      500: {
        normal: "Outfit_500Medium",
      },
      600: {
        normal: "Outfit_600SemiBold",
      },
      700: {
        normal: "Outfit_700Bold",
      },
      800: {
        normal: "Outfit_800ExtraBold",
      },
      900: {
        normal: "Outfit_900Black",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Outfit",
    body: "Outfit",
    mono: "Outfit",
  },
});

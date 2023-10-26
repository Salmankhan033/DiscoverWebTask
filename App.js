import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import {
  PaperProvider,
  configureFonts,
  MD2LightTheme,
  useTheme,
} from "react-native-paper";

import { Colors } from "./src/utils/Colors";
import Navigations from "./src/utils/Navigations";
import { useFonts } from "expo-font";
import BottomNavigations from "./src/utils/BottomNavigations";

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   "Exo-Regular" : "./src/assets/fonts/Exo-Regular.ttf",
  // })
  const [loaded] = useFonts({
    "Exo-Regular": require("./src/assets/fonts/Exo-Regular.ttf"),
    "Exo-Bold": require("./src/assets/fonts/Exo-Bold.ttf"),
    "Exo-SemiBold": require("./src/assets/fonts/Exo-SemiBold.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  // First, define base font that will be used across the app.
  // For MD3 this will apply to all base typography variants:
  // displaySmall, headlineMedium, titleLarge etc.

  const baseFont = {
    fontFamily: "Exo-Regular",
  };

  const baseVariants = configureFonts({ config: baseFont });

  // Then, define custom fonts for different variants

  const customVariants = {
    // Customize individual base variants:
    displayMedium: {
      ...baseVariants.displayMedium,
      fontFamily: "Exo-Regular",
    },

    // Add own tokens if required:
    bold: {
      ...baseVariants.bodyMedium,
      fontFamily: "Exo-Regular",
    },
  };

  // Finally, merge base variants with your custom tokens
  // and apply custom fonts to your theme.

  const fonts = configureFonts({
    config: {
      ...baseVariants,
      ...customVariants,
    },
  });

  const theme = useTheme();

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      {/* <SafeAreaView style={styles.container}> */}
      <StatusBar
        backgroundColor={Colors.Anti_flash_white}
        barStyle={"dark-content"}
      />
      {/* <Navigations /> */}
      <BottomNavigations />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Anti_flash_white,
    alignItems: "center",
    // justifyContent: 'center',
  },
});

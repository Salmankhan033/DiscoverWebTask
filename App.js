import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { PaperProvider } from "react-native-paper";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "./src/screens/SignInScreen";
import { Colors } from "./src/utils/Colors";
import SignUpScreen from "./src/screens/SignUpScreen";
import GradeSelectionScreen from "./src/screens/GradeSelectionScreen";
import ProvinceSelectionScreen from "./src/screens/ProvinceSelectionScreen";
import ExploreScreen from "./src/screens/ExploreScreen";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.Anti_flash_white}
          barStyle={"dark-content"}
        />
        <ExploreScreen />
      </SafeAreaView>
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

import { View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import GradeSelectionScreen from "../screens/GradeSelectionScreen";
import ProvinceSelectionScreen from "../screens/ProvinceSelectionScreen";
import ExploreScreen from "../screens/ExploreScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigations from "./BottomNavigations";
const Navigations = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="GradeSelectionScreen"
          component={GradeSelectionScreen}
        />
        <Stack.Screen
          name="ProvinceSelectionScreen"
          component={ProvinceSelectionScreen}
        />
        <Stack.Screen name="ExploreScreen" component={BottomNavigations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

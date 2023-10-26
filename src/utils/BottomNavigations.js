import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import ExploreScreen from "../screens/ExploreScreen";
import { Colors } from "./Colors";

const Tab = createBottomTabNavigator();
const FocusedTabLabel = ({ label, focused }) => (
  <Text style={{ color: focused ? "blue" : "gray" }}>{label}</Text>
);
export default function BottomNavigations() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopLeftRadius: 20, // Add top left border radius
            borderTopRightRadius: 20,
          },
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20, // Add top left border radius
              borderTopRightRadius: 20,
            }}
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
          />
        )}
      >
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{ width: wp("40%"), alignItems: "center", gap: wp(2) }}
              >
                <Image
                  source={require("../assets/explore.png")}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  }}
                >
                  ExploreScreen
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Stream"
          component={Stream}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{ width: wp("40%"), alignItems: "center", gap: wp(2) }}
              >
                <Image
                  source={require("../assets/stream.png")}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  }}
                >
                  Stream
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ClassWork"
          component={ClassWork}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{ width: wp("40%"), alignItems: "center", gap: wp(2) }}
              >
                <Image
                  source={require("../assets/classwork.png")}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  }}
                >
                  ClassWork
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Stream() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}
function ClassWork() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

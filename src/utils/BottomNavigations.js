import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CommonActions } from "@react-navigation/native";
import ExploreScreen from "../screens/ExploreScreen";
import { Colors } from "./Colors";
import { useTheme } from "react-native-paper";
import * as Typography from "../utils/typography";

const Tab = createBottomTabNavigator();
export default function BottomNavigations() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeBackgroundColor: "transparent",
        tabBarActiveBackgroundColor: "transparent",
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: wp("5%"),
            borderTopRightRadius: wp("5%"),
            position: "absolute",
            overflow: "hidden",
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
                  width: wp("8%"),
                  height: wp("8%"),
                  tintColor: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  fontFamily: "Exo-Regular",
                  fontSize: Typography.FONT_SIZE_13,
                }}
              >
                Explore
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
                  width: wp("8%"),
                  height: wp("8%"),
                  tintColor: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  fontFamily: "Exo-Regular",
                  fontSize: Typography.FONT_SIZE_13,
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
                  width: wp("8%"),
                  height: wp("8%"),
                  tintColor: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.Nebula_Blue : Colors.Charcoal,
                  fontFamily: "Exo-Regular",
                  fontSize: Typography.FONT_SIZE_13,
                }}
              >
                ClassWork
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Stream() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Stream!</Text>
    </View>
  );
}
function ClassWork() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">ClassWork!</Text>
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

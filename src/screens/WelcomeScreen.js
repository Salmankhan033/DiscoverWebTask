import React, { useEffect } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet,Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  FadeIn, FadeOut 
} from "react-native-reanimated";

const WelcomeScreen = (props) => {
  const opacity = useSharedValue(0);
  const imageOpacity = useSharedValue(0);


  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) });
    imageOpacity.value =withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.ease) });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: imageOpacity.value,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Animated.Image
        source={require("../assets/MainImg.png")}
        style={[styles.imageStyle, imageStyle]}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Let's find the "A" with us</Text>
        <Text style={styles.bodyText}>
          Please Sign in to view personalized recommendations
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          title={"Sign up"}
          onPress={() => props.navigation.navigate("SignUpScreen")}

        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ExploreScreen")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: wp("5%"),
  },
  imageStyle: {
    alignSelf: "center",
    width: "100%", // Make the image responsive
    height: hp(40), // Make the image responsive
  },
  textContainer: {
    alignItems: "center",
    padding: wp("2%"),
  },
  headerText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.CharcoalCharcoal,
    fontFamily: "Exo-Bold",
  },
  bodyText: {
    fontSize: Typography.FONT_SIZE_15,
    color: Colors.Payne_Gray,
    textAlign: "center",
    paddingTop: hp("1%"),
    fontFamily: "Exo-SemiBold",
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("3%"),
  },
  skipText: {
    color: Colors.Nebula_Blue,
    fontSize: Platform.OS === 'web' ? "22px" : Typography.FONT_SIZE_18,
    fontFamily:"Exo-SemiBold"
  },
});

export default WelcomeScreen;

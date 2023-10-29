import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Colors } from "../utils/Colors";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import * as yup from "yup";
import * as Typography from "../utils/typography";

const validationSchema = yup.object().shape({
  // name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
const SignInScreen = (props) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const opacity = useSharedValue(0);
  const imageOpacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
    imageOpacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
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

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      props.navigation.navigate("GradeSelectionScreen");
      setErrors({});
    } catch (validationErrors) {
      console.log("Validation errors:", validationErrors);
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Animated.Image
          source={require("../assets/signin.png")}
          style={[styles.imageStyle, imageStyle]}
          resizeMode={"contain"}
        />
        <View style={styles.inputView}>
          <CustomTextInput
            placeHolder="name@example.com"
            heading={"Email address"}
            isPassword={false}
            onTextChange={(text) => setFormData({ ...formData, email: text })}
          />
          {errors.email && <Text style={styles.Errortxt}>{errors.email}</Text>}
          <CustomTextInput
            placeHolder=" ********"
            isPassword={true}
            showPassword={false}
            heading={"Password"}
            onTextChange={(text) =>
              setFormData({ ...formData, password: text })
            }
          />
          {errors.password && (
            <Text style={styles.Errortxt}>{errors.password}</Text>
          )}
        </View>
        <View style={styles.btnView}>
          <CustomButton title={"Sign In"} onPress={() => validateForm()} />
          <View style={styles.textView}>
            <Text>Don't have account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUpScreen")}
            >
              <Text style={styles.signupTxt}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </KeyboardAwareScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: wp("5%"),
  },
  imageStyle: {
    alignSelf: "center",
    width: Platform.OS === "web" ? wp(60) : "100%",
    height: Platform.OS === "web" ? hp(30) : hp(40),
  },
  inputView: {
    // marginTop: hp("5%"),
    height: hp("32%"),
    // justifyContent: "space-between",
  },
  btnView: {
    height: hp("16%"),
    justifyContent: "flex-end",
  },
  textView: {
    flexDirection: "row",
    paddingVertical: hp("1%"),
    justifyContent: "center",
    fontFamily: "Exo-Regular",
    alignItems: "center",
  },
  signupTxt: {
    color: Colors.Nebula_Blue,
    fontSize: Platform.OS === "web" ? "22px" : Typography.FONT_SIZE_18,
    fontFamily: "Exo-SemiBold",
  },
  Errortxt: {
    color: "red",
    // alignSelf: "center",
    // width: wp("90%"),
    marginTop: hp(-2),
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { HelperText } from "react-native-paper";
import * as yup from "yup";
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignUpScreen = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const opacity = useSharedValue(0);
  const imageOpacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
    imageOpacity.value = withTiming(1, {
      duration: 3000,
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

  const validateForm = () => {
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Validation passed, submit the form or take appropriate action
        props.navigation.navigate("GradeSelectionScreen");
        console.log("Form is valid");
        setErrors({});
      })
      .catch((validationErrors) => {
        // Validation failed, update the error state
        const newErrors = {};
        validationErrors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Animated.Image
          source={require("../assets/signup.png")}
          style={[styles.imageStyle, imageStyle]}
          resizeMode={"contain"}
        />
        <View style={styles.inputView}>
          <CustomTextInput
            placeHolder="Your Name"
            heading={"Name"}
            isPassword={false}
            onTextChange={(text) => setFormData({ ...formData, name: text })}
          />
          {errors.name && <Text style={styles.Errortxt}>{errors.name}</Text>}
          <CustomTextInput
            placeHolder="name@example.com"
            heading={"Email address"}
            isPassword={false}
            onTextChange={(text) => setFormData({ ...formData, email: text })}
          />
          {errors.email && <Text style={styles.Errortxt}>{errors.email}</Text>}
          <CustomTextInput
            placeHolder="********"
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
          <CustomButton title={"Sign Up"} onPress={() => validateForm()} />
          <View style={styles.textView}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignInScreen")}
            >
              <Text style={styles.signupTxt}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </KeyboardAwareScrollView>
  );
};

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
    marginTop: hp("2%"),
    justifyContent: "space-between",
  },
  btnView: {
    justifyContent: "flex-end",
  },
  textView: {
    flexDirection: "row",
    paddingVertical: hp("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  signupTxt: {
    color: Colors.Nebula_Blue,
    fontSize: Platform.OS === "web" ? "22px" : Typography.FONT_SIZE_18,
    fontFamily: "Exo-SemiBold",
  },
  Errortxt: {
    color: Colors.red,
    // alignSelf: "center",
    // width: wp("90%"),
    marginTop: hp("-1%"),
    marginBottom: hp("1%"),
  },
});

export default SignUpScreen;

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import * as yup from "yup";

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
  const validateForm = async () => {
    try {
      console.log("Form data before validation:", formData);
      await validationSchema.validate(formData, { abortEarly: false });
      // Validation passed, handle the form data or take appropriate action
      console.log("Form is valid:", formData);
      props.navigation.navigate("SignUpScreen");
      setErrors({});
      // Call your API or perform other actions with the valid form data
    } catch (validationErrors) {
      console.log("Validation errors:", validationErrors);
      // Validation failed, update the error state
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={require("../assets/signin.png")}
          style={styles.imageStyle}
        />
        <View style={styles.inputView}>
          <CustomTextInput
            placeHolder="name@example.com"
            value={1233}
            heading={"Email address"}
            isPassword={false}
            onTextChange={(text) => setFormData({ ...formData, email: text })}
          />
          {errors.email && <Text style={styles.Errortxt}>{errors.email}</Text>}
          <CustomTextInput
            placeHolder=" ********"
            value={1233}
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
            <TouchableOpacity>
              <Text style={styles.signupTxt}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: hp("3%"),
  },
  imageStyle: {
    alignSelf: "center",
  },
  inputView: {
    marginTop: hp("5%"),
    height: hp("32%"),
    justifyContent: "space-between",
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
  },
  signupTxt: {
    color: Colors.Nebula_Blue,
    fontFamily: "Exo-Regular",
  },
  Errortxt: {
    color: "red",
    alignSelf: "center",
    width: wp("90%"),
    marginTop: hp(-2),
  },
});

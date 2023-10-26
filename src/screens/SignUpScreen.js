import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
import { HelperText } from "react-native-paper";
import * as yup from "yup";

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
    // if(errors=={}){
    //
    // }
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={require("../assets/signup.png")}
          style={styles.imageStyle}
        />
        <View style={styles.inputView}>
          <CustomTextInput
            placeHolder="Your Name"
            // value={1233}
            heading={"Name"}
            isPassword={false}
            onTextChange={(text) => setFormData({ ...formData, name: text })}
          />
          {errors.name && <Text style={styles.Errortxt}>{errors.name}</Text>}
          <CustomTextInput
            placeHolder="name@example.com"
            // value={1233}
            heading={"Email address"}
            isPassword={false}
            onTextChange={(text) => setFormData({ ...formData, email: text })}
          />
          {errors.email && <Text style={styles.Errortxt}>{errors.email}</Text>}
          <CustomTextInput
            placeHolder=" ********"
            // value={1233}
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
            <Text>Don't have account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignInScreen")}
            >
              <Text style={styles.signupTxt}>{` Sign In`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    // marginTop: hp("3%"),
  },
  imageStyle: {
    alignSelf: "center",
  },
  inputView: {
    marginTop: hp("1%"),
    // height: hp("32%"),
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
  },
  signupTxt: {
    color: Colors.Nebula_Blue,
  },
  Errortxt: {
    color: Colors.red,
    alignSelf: "center",
    width: wp("90%"),
    marginTop: hp("-1"),
    marginBottom: hp("1%"),
  },
});

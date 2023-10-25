import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const SignInScreen = (props) => {
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
            onTextChange={(text) => console.log(text)}
          />
          <CustomTextInput
            placeHolder=" ********"
            value={1233}
            isPassword={true}
            showPassword={false}
            heading={"Password"}
            onTextChange={(text) => console.log(text)}
          />
        </View>
        <View style={styles.btnView}>
          <CustomButton
            title={"Sign In"}
            onPress={() => props.navigation.navigate("SignUpScreen")}
          />
          <View style={styles.textView}>
            <Text>Don’t have account?</Text>
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
  },
  signupTxt: {
    color: Colors.Nebula_Blue,
  },
});

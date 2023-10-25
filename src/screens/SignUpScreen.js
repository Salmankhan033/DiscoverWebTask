import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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

const SignUpScreen = (props) => {
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
            value={1233}
            heading={"Name"}
            isPassword={false}
            onTextChange={(text) => console.log(text)}
          />
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
            onPress={() => props.navigation.navigate("GradeSelectionScreen")}
          />
          <View style={styles.textView}>
            <Text>Don’t have account?</Text>
            <TouchableOpacity>
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
});

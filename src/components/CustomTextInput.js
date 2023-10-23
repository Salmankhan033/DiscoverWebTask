import { StyleSheet, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import { TextInput, Text } from "react-native-paper";

const CustomTextInput = (props) => {
  return (
    <View style={styles.container}>
      <Text variant="bodyLarge" style={styles.textStyle}>
        {props.heading}
      </Text>
      {props.isPassword ? (
        <TextInput
          placeholder={props.placeHolder}
          value={props.value}
          onChangeText={(text) => props.onTextChange(text)}
          style={styles.inputStyle}
          underlineStyle={{ backgroundColor: Colors.white }}
          secureTextEntry={!props.showPassword}
          right={
            <TextInput.Icon icon={props.showPassword ? "eye" : "eye-off"} />
          }
        />
      ) : (
        <TextInput
          placeholder={props.placeHolder}
          value={props.value}
          onChangeText={(text) => props.onTextChange(text)}
          style={styles.inputStyle}
          underlineStyle={{ backgroundColor: Colors.white }}

          //   right={<TextInput.Icon icon={true ? "eye" : "eye-off"} />}
        />
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    paddingLeft: wp("5%"),
  },
  inputStyle: {
    backgroundColor: Colors.white,
    width: wp("90%"),
    height: hp("8%"),
    marginVertical: hp("2%"),
    alignSelf: "center",
    shadowColor: Colors.black,
    borderRadius: wp("2%"),
    borderTopRightRadius: wp("2%"),
    borderTopLeftRadius: wp("2%"),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
});

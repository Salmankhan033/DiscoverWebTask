import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
const CustomButton = (props) => {
  return (
    <Button
      mode="contained"
      style={styles.buttonStyle}
      labelStyle={styles.btnText}
      onPress={props.onPress}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: wp("60%"),
    height: hp("8%"),
    backgroundColor: Colors.Nebula_Blue,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: wp("2.5%"),
  },
  btnText: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_REGULAR_500,
  },
});

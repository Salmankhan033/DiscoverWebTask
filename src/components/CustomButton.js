import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useEffect } from "react";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";

const CustomButton = (props) => {
  console.log(Platform.OS);

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
    width: Platform.OS === "web" ? "250px" : wp("70%"),
    backgroundColor: Colors.Nebula_Blue,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: Platform.OS === "web" ? "10px" : wp("2.5%"),
    marginVertical: hp("2%"),
    paddingVertical: Platform.OS === "web" ? null : hp(2),
  },
  btnText: {
    fontSize: Platform.OS === "web" ? "22px" : Typography.FONT_SIZE_18,
    fontFamily: "Exo-SemiBold",
    color: Colors.white,
    paddingVertical: Platform.OS === "web" ? "10px" : hp("0.1%"),
  },
});

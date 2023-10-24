import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import { Text } from "react-native-paper";

const SelectionsMiniCard = (props) => {
  return (
    <TouchableOpacity style={styles.touchContainer}>
      <Image source={props.image} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default SelectionsMiniCard;

const styles = StyleSheet.create({
  touchContainer: {
    flexDirection: "row",
    backgroundColor: Colors.Platinum,
    width: wp("40%"),
    height: hp("10%"),
    justifyContent: "space-between",
    paddingHorizontal: wp("7%"),
    shadowColor: "#000",
    borderRadius: wp("2%"),
    alignItems: "center",
    margin: wp("1%"),
  },
  textStyle: {
    fontSize: Typography.FONT_SIZE_16,
  },
  imageStyle: {
    width: wp("7%"),
    height: wp("7%"),
  },
});

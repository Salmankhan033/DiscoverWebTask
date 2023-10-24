import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text } from "react-native-paper";
import { Colors } from "../utils/Colors";
import * as Typography from "../utils/typography";

const SelectionsMiniCard = (props) => {
  const { selected, title, image, onPress } = props;

  const backgroundColor =
    selected === title ? Colors.Nebula_Blue : Colors.Platinum;
  const justifyContent = props.image == null ? "center" : "space-between";

  return (
    <TouchableOpacity
      style={[styles.touchContainer, { backgroundColor, justifyContent }]}
      onPress={() => onPress(title)}
    >
      {image && <Image source={image} style={styles.imageStyle} />}
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchContainer: {
    flexDirection: "row",
    width: wp("40%"),
    height: hp("10%"),
    paddingHorizontal: wp("6%"),
    borderRadius: wp("2%"),
    alignItems: "center",
    margin: wp("1%"),
    shadowColor: "#000",
    justifyContent: "space-between",
    backgroundColor: Colors.Platinum,
  },
  textStyle: {
    fontSize: Typography.FONT_SIZE_16,
  },
  imageStyle: {
    width: wp("7%"),
    height: wp("7%"),
  },
});

export default SelectionsMiniCard;

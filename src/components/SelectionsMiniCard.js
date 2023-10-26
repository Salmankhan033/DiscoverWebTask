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
    props.style && selected !== title
      ? Colors.white
      : selected === title
      ? Colors.Nebula_Blue
      : Colors.Platinum;

  const justifyContent = props.image == null ? "center" : "space-between";
  return (
    <TouchableOpacity
      style={
        props.style
          ? [props.style, { backgroundColor, justifyContent }]
          : [styles.touchContainer, { backgroundColor, justifyContent }]
      }
      onPress={() => onPress(title)}
    >
      {image && <Image source={image} style={styles.imageStyle} />}
      <Text style={selected == title ?[ props.textStyle,{color:Colors.white,fontSize: Typography.FONT_SIZE_15,  fontFamily:'Exo-Regular',} ]: styles.textStyle}>
        {title}
      </Text>
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
    shadowColor: Colors.black,
    justifyContent: "space-between",
    backgroundColor: Colors.Platinum,
  },
  textStyle: {
    fontSize: Typography.FONT_SIZE_15,
    color:Colors.Charcoal,
    fontFamily:'Exo-Regular'
  },
  imageStyle: {
    width: wp("7%"),
    height: wp("7%"),
  },
});

export default SelectionsMiniCard;

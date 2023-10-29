import React from "react";
import { StyleSheet, TouchableOpacity, Image,Platform } from "react-native";
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
      {image && <Image source={image} style={styles.imageStyle} resizeMode='contain'/>}
      <Text style={selected == title ?[ props.textStyle,{color:Colors.white,fontSize:Platform.OS === 'web' ? "20px" : Typography.FONT_SIZE_15,  fontFamily:'Exo-Regular',} ]: styles.textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchContainer: {
    flexDirection: "row",
    width: Platform.OS === 'web' ? wp("13%") :  wp("40%"),
    height: Platform.OS === 'web' ? hp("8.5%") :  hp("10%"),
    paddingHorizontal:Platform.OS === 'web' ? hp("3%"): wp("6%"),
    borderRadius:Platform.OS === 'web' ? wp("1%") : wp("2%"),
    alignItems: "center",
    margin: wp("1%"),
    shadowColor: Colors.black,
    justifyContent: "space-between",
    backgroundColor: Colors.Platinum,
  },
  textStyle: {
    fontSize:Platform.OS === 'web' ? "20px" : Typography.FONT_SIZE_15,
    color:Colors.Charcoal,
    fontFamily:'Exo-Regular'
  },
  imageStyle: {
    width: Platform.OS === 'web' ? wp("3%") :  wp("7%"),
    height: Platform.OS === 'web' ? wp("3%") :  wp("7%"),
  },
});

export default SelectionsMiniCard;

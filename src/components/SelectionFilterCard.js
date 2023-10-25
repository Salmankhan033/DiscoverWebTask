import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text } from "react-native-paper";
import { Colors } from "../utils/Colors";
import * as Typography from "../utils/typography";

const SelectionFilterCard = (props) => {
  const { selected, title, onPress } = props;

  const backgroundColor = selected === title ? Colors.white : Colors.Platinum;

  return (
    <View>
      <TouchableOpacity
        style={[styles.touchContainer, { backgroundColor }]}
        onPress={() => onPress(title)}
      >
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchContainer: {
    alignSelf: "flex-start",
  },
  textStyle: {},
});

export default SelectionFilterCard;

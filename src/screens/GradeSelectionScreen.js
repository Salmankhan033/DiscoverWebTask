import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import GradeSelectionsCard from "../components/GradeSelectionsCard";
import CustomButton from "../components/CustomButton";

const GradeSelectionScreen = () => {
  const GradeSectionMainData = [
    "Grade  1 - 5",
    "Grade  6 - 9",
    "Grade  10 - 11",
    "Grade  12 - 13",
  ];
  const showVisibility = (data) => {
    console.warn(data);
  };
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.headingText}>
        What's your grade?
      </Text>

      <FlatList
        style={styles.flatlistStyle}
        data={GradeSectionMainData}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        renderItem={({ item, index }) => {
          return <GradeSelectionsCard title={item} onPress={showVisibility} />;
        }}
      />
      <View style={styles.btnContainer}>
        <CustomButton
          title={"Sign up"}
          onPress={() => console.log("sign in pressed")}
        />
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GradeSelectionScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp("2%"),
  },
  headingText: {
    color: Colors.Charcoal,
    width: wp("90%"),
    alignSelf: "center",
  },
  flatlistStyle: {
    height: hp("68%"),
  },
  btnContainer: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: hp("15%"),

    justifyContent: "space-between",
  },
  skipText: {
    color: Colors.Nebula_Blue,
    fontSize: Typography.FONT_SIZE_18,
  },
});
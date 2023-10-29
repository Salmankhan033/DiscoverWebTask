import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
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
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";

const GradeSelectionScreen = (props) => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <Text variant="headlineLarge" style={styles.headingText}>
          What's your grade?
        </Text>
        <FlatList
          style={styles.flatlistStyle}
          data={GradeSectionMainData}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          renderItem={({ item, index }) => {
            return <GradeSelectionsCard title={item} />;
          }}
        />
        <View style={styles.btnContainer}>
          <CustomButton
            title={"Next"}
            onPress={() => props.navigation.navigate("ProvinceSelectionScreen")}
          />
          <TouchableOpacity>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GradeSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp("5%"),
  },
  headingText: {
    color: Colors.Charcoal,
    width: Platform.OS === "web" ? wp("35%") : wp("90%"),
    alignSelf: "center",
    // backgroundColor:'red'
    fontFamily: "Exo-SemiBold",
    fontSize: Typography.FONT_SIZE_20,
    marginBottom: hp("2%"),
  },
  flatlistStyle: {
    // height: hp("68%"),
  },
  btnContainer: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: hp("15%"),
    marginTop: hp("18%"),
    justifyContent: "space-between",
  },
  skipText: {
    color: Colors.Nebula_Blue,
    fontSize: Platform.OS === "web" ? "22px" : Typography.FONT_SIZE_18,
    fontFamily: "Exo-SemiBold",
  },
});

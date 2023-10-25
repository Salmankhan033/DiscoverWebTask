import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import FilterComponent from "../components/FilterComponent";
import TeacherCard from "../components/TeacherCard";
import InstitutionsComponents from "../components/InstitutionsComponents";
import { InstitutionsData, TeachersData } from "../utils/Constants";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <FilterComponent isSubject={false} title={"Popular Teachers"} />
      <FlatList
        data={TeachersData}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: hp("40%"),
        }}
        ItemSeparatorComponent={() => <View style={{ margin: wp("2%") }} />}
        renderItem={({ item, index }) => {
          return (
            <TeacherCard
              name={item.name}
              subject={item.subject}
              backgroundColor={item.backgroundColor}
              image={item.image}
            />
          );
        }}
      />
      <FilterComponent isSubject={true} title={"Popular Institutions"} />

      <FlatList
        data={InstitutionsData}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ margin: wp("2%") }} />}
        renderItem={({ item, index }) => {
          return (
            <InstitutionsComponents
              name={item.name}
              subject={item.subject}
              bodyText={item.bodyText}
              backgroundColor={item.backgroundColor}
              rating={item.rating}
              image={require("../assets/Institutions1.png")}
            />
          );
        }}
      />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
});

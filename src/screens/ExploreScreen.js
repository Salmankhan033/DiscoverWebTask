import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
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
import ExploreHeader from "../components/ExploreHeader";
import SearchInputComponent from "../components/SearchInputComponent";

const ExploreScreen = () => {
  const [search, setSearch] = useState("");
  const [Teachers, setTeachers] = useState("");

  const filterByName = (data, searchTerm) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();

    return data.filter((teacher) => {
      const lowercaseName = teacher.name.toLowerCase();

      return lowercaseName.includes(lowercaseSearchTerm);
    });
  };
  const onSearchTeacher = (searchTerm) => {
    setSearch(searchTerm);
    const filteredTeachers = filterByName(TeachersData, searchTerm);
    setTeachers(filteredTeachers);
  };
  return (
    <SafeAreaView style={{flex:1,paddingTop:hp("5%")}}>
    <ScrollView
      style={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
    >
      <View style={styles.container}>
        {search == "" && <ExploreHeader />}
        <SearchInputComponent onChangeText={onSearchTeacher} />

        {search == "" ? (
          <FilterComponent
            isSubject={true}
            title={"Popular Teachers"}
            search={search}
          />
        ) : (
          <Text variant="headlineMedium" style={styles.headerText}>
            Teachers
          </Text>
        )}
        <FlatList
          data={search == "" ? TeachersData : Teachers}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            // height: hp("35%"),
            paddingBottom: hp("5%"),
            paddingLeft:hp("2.5%")
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
        {search == "" ? (
          <FilterComponent isSubject={false} title={"Popular Institutions"} />
        ) : (
          <Text variant="headlineMedium" style={styles.headerText}>
            Institutions
          </Text>
        )}

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
    </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    // width: wp("92%"),
  },
  headerText: {
    fontSize: Typography.FONT_SIZE_20,
    height: hp("4%"),
    fontFamily:'Exo-SemiBold'
  },
});

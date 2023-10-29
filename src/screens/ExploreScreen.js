import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, {
  Easing,
  timing,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import * as Typography from "../utils/typography";
import FilterComponent from "../components/FilterComponent";
import TeacherCard from "../components/TeacherCard";
import InstitutionsComponents from "../components/InstitutionsComponents";
import { InstitutionsData, TeachersData } from "../utils/Constants";
import ExploreHeader from "../components/ExploreHeader";
import SearchInputComponent from "../components/SearchInputComponent";
const isWeb = Platform.OS === "web";
const ExploreScreen = () => {
  const [search, setSearch] = useState("");
  const [Teachers, setTeachers] = useState("");
  const translateY = useSharedValue(hp("20%"));
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withSpring(0, { damping: 2, stiffness: 80 });
    opacity.value = withTiming(1, { duration: 500 });
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateY.value }],
      opacity: opacity.value,
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });
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
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: hp("5%"),
        marginBottom: hp("10%"),
      }}
    >
      <ScrollView
        style={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        <View style={styles.container}>
          <Animated.View
            style={[
              animatedStyle,
              { paddingBottom: hp("5%"), paddingLeft: hp("2.5%") },
            ]}
          >
            {search == "" && <ExploreHeader />}
          </Animated.View>
          <Animated.View
            style={[
              animatedStyle2,
              { paddingBottom: hp("5%"), paddingLeft: hp("2.5%") },
            ]}
          >
            <SearchInputComponent onChangeText={onSearchTeacher} />
          </Animated.View>

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
          <Animated.View
            style={[
              animatedStyle,
              { paddingBottom: hp("5%"), paddingLeft: hp("2.5%") },
            ]}
          >
            <FlatList
              data={search == "" ? TeachersData : Teachers}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                // height: hp("35%"),
                paddingBottom: hp("5%"),
                paddingLeft: isWeb ? hp("8%") : hp("2.5%"),
              }}
              ItemSeparatorComponent={() => (
                <View style={{ margin: wp("2%") }} />
              )}
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
          </Animated.View>
          {search == "" ? (
            <FilterComponent isSubject={false} title={"Popular Institutions"} />
          ) : (
            <Text variant="headlineMedium" style={styles.headerText}>
              Institutions
            </Text>
          )}
          <Animated.View
            style={[
              animatedStyle2,
              { paddingBottom: hp("5%"), paddingLeft: hp("2.5%") },
            ]}
          >
            <FlatList
              data={InstitutionsData}
              contentContainerStyle={{
                paddingBottom: hp("5%"),
                paddingLeft: isWeb ? hp("7%") : null,
                justifyContent: "space-between",
              }}
              numColumns={isWeb ? 2 : 1}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{ margin: wp("2%") }} />
              )}
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
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    // alignSelf: "center",
    flex: 1,
  },
  headerText: {
    fontSize: Platform.OS === "web" ? "30px" : Typography.FONT_SIZE_20,
    height: hp("4%"),
    fontFamily: "Exo-SemiBold",
    paddingLeft: "4%",
  },
});

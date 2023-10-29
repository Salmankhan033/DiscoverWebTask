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
import SelectionsMiniCard from "../components/SelectionsMiniCard";

const ProvinceSelectionScreen = (props) => {
  const [showGrade, setShowGrade] = useState(false);
  const [selected, setSelected] = useState("");
  const ProvinceSectionData = [
    "Central",
    "Eastern",
    "North Central",
    "Northern",
    "North Western",
    "Sabaragamuwa",
    "Southern",
    "Uva",
    "Western",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <Text variant="headlineLarge" style={styles.headingText}>
          What's your grade?
        </Text>
        <View style={styles.flatlistContainer}>
          <Text variant="headlineSmall" style={styles.innerHeadingText}>
            Provinces of Sri Lanka
          </Text>
          <FlatList
            style={styles.flatlistStyle}
            data={ProvinceSectionData}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            nestedScrollEnabled={true}
            renderItem={({ item, index }) => {
              return (
                <SelectionsMiniCard
                  image={null}
                  title={item}
                  onPress={(txt) => setSelected(txt)}
                  selected={selected}
                />
              );
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            title={"Next"}
            onPress={() => props.navigation.navigate("ExploreScreen")}
          />
          <TouchableOpacity>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProvinceSelectionScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp("5%"),
    flex: 1,
  },
  headingText: {
    color: Colors.Charcoal,
    width: Platform.OS === "web" ? wp("35%") : wp("90%"),
    alignSelf: "center",
    height: hp("10%"),
    fontFamily: "Exo-SemiBold",
  },
  flatlistContainer: {
    backgroundColor: Colors.Anti_flash_white1,
    paddingVertical: hp("3%"),
    marginHorizontal: Platform.OS === "web" ? wp("30%") : wp("3%"),
  },
  innerHeadingText: {
    color: Colors.Payne_Gray,
    width: Platform.OS === "web" ? wp("35%") : wp("90%"),
    alignSelf: "center",
    paddingBottom: hp("1.5%"),
    fontFamily: "Exo-SemiBold",
  },
  flatlistStyle: {
    // height: hp("68%"),
    alignSelf: "center",
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

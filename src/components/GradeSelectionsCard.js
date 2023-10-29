import { StyleSheet, View, TouchableOpacity, FlatList, SafeAreaView, Platform } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import { Text } from "react-native-paper";
import SelectionsMiniCard from "./SelectionsMiniCard";

const GradeSelectionsCard = (props) => {
  const [showGrade, setShowGrade] = useState(false);
  const [selected, setSelected] = useState("");
  const GradeSectionData = [
    {
      image: require("../assets/color.png"),
      title: "Arts",
    },
    {
      image: require("../assets/microScope.png"),
      title: "Science",
    },
    {
      image: require("../assets/measure.png"),
      title: "Maths",
    },
    {
      image: require("../assets/number.png"),
      title: "Commerce",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.touchContainer}
        onPress={() => setShowGrade(!showGrade)}
      >
        <Text style={styles.textStyle}>{props.title}</Text>
        <FontAwesome
          name={showGrade ? "chevron-up" : "chevron-down"}
          size={22}
          color={Colors.Payne_Gray}
        />
      </TouchableOpacity>

      {showGrade && (
        <View style={styles.selectionsStyle}>
          <FlatList
            data={GradeSectionData}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <SelectionsMiniCard
                  image={item.image}
                  title={item.title}
                  onPress={(txt) => setSelected(txt)}
                  selected={selected}
                />
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default GradeSelectionsCard;

const styles = StyleSheet.create({
  container: {
    width: Platform.OS === 'web' ? wp("34%") : wp("92%"),
    // height: hp("10%"),
    alignSelf: "center",
    // backgroundColor: Colors.Anti_flash_white1,
    // // marginTop: hp("2%"),
    // borderRadius: wp("3%"),
    // paddingTop:hp("2%")
  },
  touchContainer: {
    backgroundColor: Colors.Anti_flash_white1,
 
    width: Platform.OS === 'web' ? wp("34%") : wp("92%"),
    height: hp("10%"),
    paddingHorizontal: wp("4%"),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius:Platform.OS === 'web' ? "10px" : wp("2%"),
    zIndex: -100,
    marginTop:hp(1)
  },
  textStyle: {
    fontSize: Typography.FONT_SIZE_15,
    color:Colors.Payne_Gray,
    fontFamily:'Exo-SemiBold'
  },
  selectionsStyle: {
    height: hp("24%"),
    width: Platform.OS === 'web' ? wp("31%") : wp("85%"),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: +100,
  },
});

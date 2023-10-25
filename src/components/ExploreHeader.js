import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import { Text } from "react-native-paper";
import SearchInputComponent from "./SearchInputComponent";

const ExploreHeader = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Good evening!</Text>
          <Text style={styles.subHeaderText}>Hardline Scott</Text>
        </View>
        <View style={styles.image}>
          <Image source={require("../assets/Propic.png")} />
        </View>
      </View>
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
    paddingTop: hp("3%"),
    paddingBottom: wp("5%"),
  },
  textContainer: {
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "600",
    fontSize: 32,
  },
  subHeaderText: {
    fontWeight: "600",
    fontSize: 20,
    color: Colors.Payne_Gray,
  },
});

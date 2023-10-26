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
        <View>
          <Image source={require("../assets/Propic.png")} style={styles.image}/>
        </View>
      </View>
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: wp("4%"),
    justifyContent: "space-between",
    paddingTop: hp("3%"),
    paddingBottom: wp("5%"),
  },
  textContainer: {
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "600",
    fontSize: Typography.FONT_SIZE_24,
    color:Colors.Charcoal,
    fontFamily:'Exo-Bold',
  },
  subHeaderText: {
    fontWeight: "600",
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.Payne_Gray,
    fontFamily:'Exo-SemiBold',
  },
  image:{
    height:hp("10%"),
    width:wp("20%")
  },
});

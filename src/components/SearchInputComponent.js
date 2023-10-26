import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import { Text } from "react-native-paper";

const SearchInputComponent = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <TextInput
            placeholder="Search"
            style={styles.input}
            underlineStyle={{
              backgroundColor: Colors.white,
              borderRadius: wp("3%"),
            }}
            onChangeText={(text) => props.onChangeText(text)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconView}>
          <Feather name="search" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/Group21.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInputComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("92%"),
    alignSelf: "center",

    marginBottom: hp("3%"),
  },
  inputContainer: {
    flexDirection: "row",
    // height: hp("9%"),
    width: wp("70%"),
    justifyContent: "space-between",
    // borderWidth: wp(".09%"),
    borderRadius: wp("3%"),
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical:hp("0.5%"),
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  leftContainer: {
    width: wp("20%"),
    alignItems: "center",
  },
  input: {
    fontSize: Typography.FONT_SIZE_20,
    // height: hp("7%"),
    width: wp("55%"),
    borderRadius: wp("3%"),
    marginLeft: 5,
    backgroundColor: Colors.white,
    fontFamily:'Exo-Regular',
  },
  iconView: {
    backgroundColor: Colors.Nebula_Blue,
    padding: wp("3%"),
    borderRadius: wp("2%"),
    marginRight: wp("2%"),
  },
});

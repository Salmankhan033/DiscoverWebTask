import { StyleSheet, View, Image, TouchableOpacity, Platform, TextInput } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";

const isWeb = Platform.OS === 'web';

const SearchInputComponent = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <TextInput
            placeholder="Search"
            style={styles.input}
            underlineColorAndroid="transparent" // Remove underline on Android
            onChangeText={(text) => props.onChangeText(text)}
            placeholderTextColor={Colors.Payne_Gray}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconView}>
          <Feather name="search" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/Group21.png")}
            style={{
              height:isWeb?hp("5%"):  hp("4%"),
              width:isWeb?hp("5%"):  hp('4%'),
            }}
            resizeMode='contain'
          />
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
    width: "100%", // Expand to 100% on web
    alignSelf: "center",
    marginBottom: hp("3%"),
    alignItems: 'center',
    paddingLeft: wp(3.9),
    alignItems:'center',
    marginTop:isWeb ? null : hp(4)
  },
  inputContainer: {
    flexDirection: "row",
    width: isWeb? "70%": wp("70%"), // Adjust for web as needed
    justifyContent: "space-between",
    borderRadius: isWeb? wp(1): wp("3%"), // Use absolute values for borderRadius
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: 8, // Use absolute values for padding
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: wp(2)
  },
  leftContainer: {
    width: "20%", // Adjust for web as needed
    alignItems: "center",
  },
  input: {
    fontSize: isWeb ? Typography.FONT_SIZE_15 : Typography.FONT_SIZE_20,
    width: isWeb ? "80%": wp("55%"),
    marginLeft: 5,
    backgroundColor: Colors.white,
    fontFamily: 'Exo-Regular',
  },
  iconView: {
    backgroundColor: Colors.Nebula_Blue,
    padding:isWeb ? wp('1.5%'): wp("2%"),
    borderRadius:isWeb ? wp(1): wp("2%"),
    marginRight: wp("2%"),
  },
});

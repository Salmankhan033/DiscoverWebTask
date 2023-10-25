import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/MainImg.png")}
        style={styles.imageStyle}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Let's find the "A" with us</Text>
        <Text style={styles.bodyText}>
          Please Sign in to view personalized recommendations
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          title={"Sign up"}
          onPress={() => console.log("Sign in pressed")}
        />
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    alignContent: "center",
    paddingTop: hp("5%"),
  },
  imageStyle: {
    alignSelf: "center",
  },
  textContainer: {
    width: wp("70%"),
    height: hp("20%"),
    alignSelf: "center",
    alignItems: "center",
    padding: wp("1%"),
  },
  headerText: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_REGULAR_500,
    color: Colors.CharcoalCharcoal,
  },
  bodyText: {
    fontSize: Typography.FONT_SIZE_18,
    // fontWeight: Typography.FONT_WEIGHT_REGULAR_500,
    color: Colors.Payne_Gray,
    textAlign: "center",
    paddingTop: hp("1%"),
    width: wp("80%"),
  },
  btnContainer: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: hp("15%"),
    justifyContent: "space-between",
  },
  skipText: {
    color: Colors.Nebula_Blue,
    fontSize: Typography.FONT_SIZE_18,
  },
});

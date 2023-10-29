import { StyleSheet, View,Platform } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Typography from "../utils/typography";
import { Colors } from "../utils/Colors";
import { TextInput, Text } from "react-native-paper";

const CustomTextInput = (props) => {
  return (
    <View style={styles.container}>
      <Text variant="bodyLarge" style={styles.textStyle}>
        {props.heading}
      </Text>
      {props.isPassword ? (
        <TextInput
          placeholder={props.placeHolder}
          value={props.value}
          onChangeText={(text) => props.onTextChange(text)}
          style={styles.inputStyle}
          underlineColor="transparent" // Change to set underline as transparent
          secureTextEntry={!props.showPassword}
          right={
            <TextInput.Icon icon={props.showPassword ? "eye" : "eye-off"} style={{
              marginTop: Platform.OS === 'web'? hp('5%') : null
            }}/>
          }
        />
      ) : (
        <TextInput
          placeholder={props.placeHolder}
          value={props.value}
          onChangeText={(text) => props.onTextChange(text)}
          style={styles.inputStyle}
          underlineColor="transparent" // Change to set underline as transparent
        />
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp("2%"),
    width: Platform.OS === 'web' ? "350px":null
  },
  textStyle: {
    fontFamily: "Exo-Regular",
    color:Colors.Payne_Gray
  },
  inputStyle: {
    backgroundColor: Colors.white,
    width: Platform.OS === 'web' ? "350px": wp("90%"), // Responsive width for mobile
    height:  Platform.OS === 'web' ? "50px": hp("8%"), // Responsive height for mobile
    alignSelf: "center",
    shadowColor: Colors.black,
    borderRadius: Platform.OS === 'web' ? "10px": wp("2%"),
    borderTopRightRadius:Platform.OS === 'web' ? "10px": wp("2%"),
    borderTopLeftRadius:Platform.OS === 'web' ? "10px": wp("2%"),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    fontFamily: "Exo-Regular",
    justifyContent:'center',
    paddingTop: Platform.OS === 'web'? hp("2%") : null
  },
});
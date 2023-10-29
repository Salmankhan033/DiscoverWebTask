import * as React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "../utils/Colors";
import * as Typography from "../utils/typography";
const isWeb = Platform.OS === "web";

const TeacherCard = (props) => {
  return (
    <Card
      elevation={0.15}
      contentStyle={styles.cardStyle}
      style={{
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card.Content>
        <Card.Cover
          source={props.image}
          style={[
            styles.imageStyle,
            { backgroundColor: props.backgroundColor },
          ]}
        />
        <View style={styles.textView}>
          <Text variant="titleMedium" style={{ fontFamily: 'Exo-SemiBold', color:Colors.Payne_Gray }}>{props.name}</Text>
          <Text variant="bodyMedium" style={{ fontFamily: 'Roboto-Regular' , color:Colors.Payne_Gray}}>{props.subject}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default TeacherCard;

const styles = StyleSheet.create({
  cardStyle: {
    width: isWeb? wp("8%") : null,
    height: isWeb? wp("14%") : null,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius:isWeb? wp("0.5%"): wp("3%"),
    shadowColor: Colors.Payne_Gray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.46,
    elevation: 2,
  },
  imageStyle: {
    width: isWeb ? wp("6%") : wp("30%"), 
    height: isWeb ? wp("6%") : wp("30%"), 
    alignSelf:'center'
  },
  textView: {
    margin: wp("1%"),
    width: isWeb? wp("7%") : null,
  },
});


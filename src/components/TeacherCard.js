import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "../utils/Colors";
import * as Typography from "../utils/typography";

const TeacherCard = (props) => {
  return (
    <Card
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
          <Text variant="titleMedium">{props.name}</Text>
          <Text variant="bodyMedium">{props.subject}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default TeacherCard;
const styles = StyleSheet.create({
  cardStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius: wp("3%"),
    shadowColor: Colors.Payne_Gray,
    shadowOffset: {
      width: -10,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.46,
    elevation: 5,
  },
  imageStyle: {
    width: wp("30%"),
    height: wp("30%"),
  },
  textView: {
    margin: wp("1%"),
  },
});

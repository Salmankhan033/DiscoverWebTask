import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-ratings";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "../utils/Colors";
import * as Typography from "../utils/typography";

const InstitutionsComponents = (props) => {
  return (
    <Card
      contentStyle={styles.cardStyle}
      style={{
        alignSelf: "center",
        alignItems: "center",
        width: wp("92%"),
        justifyContent: "center",
      }}
    >
      <Card.Content style={{ flexDirection: "row" }}>
        <Card.Cover
          source={props.image}
          style={[
            styles.imageStyle,
            { backgroundColor: props.backgroundColor },
          ]}
        />
        <View style={styles.textView}>
          <Text variant="titleMedium">{props.name}</Text>
          <View style={styles.ratingView}>
            <Rating
              type="custom"
              ratingColor="#FED430"
              ratingBackgroundColor={Colors.white}
              ratingCount={5}
              imageSize={12}
              //   style={{ padding: 10 }}
            />
            <Text variant="bodySmall">{props.rating} (413)</Text>
          </View>
          <Text variant="titleSmall">Bio Science</Text>
          <Text variant="bodySmall" style={styles.bodyText}>
            {props.bodyText}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default InstitutionsComponents;
const styles = StyleSheet.create({
  cardStyle: {
    justifyContent: "center",
    backgroundColor: Colors.white,
    width: wp("92%"),
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
    width: wp("40%"),
    height: wp("40%"),
  },
  textView: {
    marginLeft: wp("1.2%"),

    width: wp("40%"),
  },
  ratingView: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  bodyText: {},
});

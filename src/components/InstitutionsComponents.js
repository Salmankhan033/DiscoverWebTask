import * as React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-ratings";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "../utils/Colors";
import * as Typography from "../utils/typography";
const isWeb = Platform.OS === "web";

const InstitutionsComponents = (props) => {
  return (
    <Card
      elevation={0.15}
      contentStyle={styles.cardStyle}
      style={{
        width: isWeb ? "40%" : wp("92%"),
        alignSelf:'center',
        justifyContent:'space-between',
        marginRight: isWeb ? "12%" : null
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
          <Text variant="titleMedium" style={{ fontFamily: 'Exo-SemiBold', color:Colors.Payne_Gray }}>{props.name}</Text>
          <View style={styles.ratingView}>
            <Rating
              type="custom"
              ratingColor="#FED430"
              ratingBackgroundColor={Colors.white}
              ratingCount={5}
              imageSize={12}
            />
            <Text variant="bodySmall">{props.rating} (413)</Text>
          </View>
          <Text variant="titleSmall" style={{ fontFamily: 'Roboto-Bold', color:Colors.Payne_Gray }}>Bio Science</Text>
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
    // width: isWeb ? "50%" : wp("92%"), 
    borderRadius:isWeb? wp("0.5%"): wp("3%"),
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
    width: isWeb ? wp("6%") : wp("40%"), 
    height: isWeb ? wp("6%") : wp("40%"), 
  },
  textView: {
    marginLeft: wp("1.2%"),
    width: isWeb ? "60%" : wp("40%"),
  },
  ratingView: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  bodyText: {
    fontFamily: 'Roboto-Regular',
    color:Colors.Payne_Gray
  },
});

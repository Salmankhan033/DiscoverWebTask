import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text } from "react-native-paper";
import { Colors } from "../utils/Colors";
import * as Typography from "../utils/typography";
import SelectionsMiniCard from "./SelectionsMiniCard";

const isWeb = Platform.OS === "web";

const FilterComponent = (props) => {
  const [selected, setSelected] = useState("");
  const [subjectselected, setSubjectSelected] = useState("");
  const [selectFilter, setSelectFilter] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text variant="headlineMedium" style={styles.headerText}>
          {props.title}
        </Text>
        <TouchableOpacity onPress={() => setSelectFilter(!selectFilter)}>
          {selectFilter ? (
            <Image
              source={require("../assets/filter_green.png")}
              style={styles.filterImage}
            />
          ) : (
            <Image
              source={require("../assets/filter.png")}
              style={styles.filterImage}
            />
          )}
        </TouchableOpacity>
      </View>
      {selectFilter && (
        <View>
          <Text variant="titleMedium" style={styles.titleText}>
            Area
          </Text>
          <View style={styles.areaComponent}>
            <SelectionsMiniCard
              image={null}
              title={"Island"}
              onPress={(txt) => setSelected(txt)}
              selected={selected}
              style={styles.cardStyle}
              textStyle={styles.textStyle}
            />
            <SelectionsMiniCard
              image={null}
              title={"Province"}
              onPress={(txt) => setSelected(txt)}
              selected={selected}
              style={styles.cardStyle}
              textStyle={styles.textStyle}
            />
            <SelectionsMiniCard
              image={null}
              title={"Districts"}
              onPress={(txt) => setSelected(txt)}
              selected={selected}
              style={styles.cardStyle}
              textStyle={styles.textStyle}
            />
          </View>
          {props.isSubject && (
            <View>
              <Text variant="titleMedium" style={styles.titleText}>
                Subject
              </Text>
              <View style={styles.areaComponent}>
                <SelectionsMiniCard
                  image={null}
                  title={"All Subjects"}
                  onPress={(txt) => setSubjectSelected(txt)}
                  selected={subjectselected}
                  style={styles.cardStyle}
                  textStyle={styles.textStyle}
                />
                <SelectionsMiniCard
                  image={null}
                  title={"Biology"}
                  onPress={(txt) => setSubjectSelected(txt)}
                  selected={subjectselected}
                  style={styles.cardStyle}
                  textStyle={styles.textStyle}
                />
                <SelectionsMiniCard
                  image={null}
                  title={"Chemistry"}
                  onPress={(txt) => setSubjectSelected(txt)}
                  selected={subjectselected}
                  style={styles.cardStyle}
                  textStyle={styles.textStyle}
                />
                <SelectionsMiniCard
                  image={null}
                  title={"Physics"}
                  onPress={(txt) => setSubjectSelected(txt)}
                  selected={subjectselected}
                  style={styles.cardStyle}
                  textStyle={styles.textStyle}
                />
                <SelectionsMiniCard
                  image={null}
                  title={"Science for Technology"}
                  onPress={(txt) => setSubjectSelected(txt)}
                  selected={subjectselected}
                  style={styles.cardStyle}
                  textStyle={styles.textStyle}
                />
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: isWeb ? "92%" : wp("92%"),
    alignSelf: "center",
    marginBottom: hp("3%"),
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: isWeb ? "100%" : wp("91%"),
    alignSelf: "center",
    alignItems: "center",
    // paddingLeft: isWeb ? wp(3.9): null
  },
  headerText: {
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.Charcoal,
    fontFamily: "Exo-SemiBold",
  },
  titleText: {
    fontSize: Typography.FONT_SIZE_12,
    width: isWeb ? "90%" : wp("90%"),
    alignSelf: "center",
    color: Colors.Payne_Gray,
    fontFamily: "Exo-SemiBold",
  },
  areaComponent: {
    flexDirection: "row",
    paddingVertical: hp("1%"),
    flexWrap: "wrap",
  },
  cardStyle: {
    alignSelf: "flex-start",
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("0.5%"),
    borderRadius: wp("3%"),
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: wp("1%"),
    marginVertical: hp("1%"),
  },
  textStyle: {
    fontSize: Typography.FONT_SIZE_15,
    fontFamily: "Exo-Regular",
  },
  filterImage: {
    height: isWeb ? hp("5%") : hp("4%"),
    width: isWeb ? hp("5%") : hp("4%"),
    resizeMode: "contain",
    marginRight:isWeb ? wp("3%"): null,
  },
});

export default FilterComponent;

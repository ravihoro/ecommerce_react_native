import React from "react";
import { Rating } from "../model/product";
import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";

type RatingContainerProps = {
  rating: Rating;
};

const RatingContainer: React.FC<RatingContainerProps> = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ratingText}>{rating.rate}</Text>
      <Ionicons
        name="star"
        color={Theme.colors.primaryIcon}
        style={{ marginRight: 10, marginLeft: 2 }}
      />
      <Text style={styles.ratingText}>{rating.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: Theme.colors.primaryLight,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  ratingText: {
    fontSize: Theme.fontSize.s,
  },
});

export default RatingContainer;

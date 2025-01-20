import { StyleSheet, View } from "react-native";
import { Theme } from "../utils/theme";
import React from "react";
import BackButton from "./BackButton";
import { Routes } from "../utils/route_constants";
import SearchField from "./SearchField";

type AppBarProps = {
  route: any;
  onPress: () => void;
};

const AppBar: React.FC<AppBarProps> = ({ onPress, route }) => {
  return (
    <View style={styles.container}>
      <BackButton onPress={onPress} />
      {route.name === Routes.ALL_CATEGORIES ? (
        <View style={styles.searchContainer}>
          <SearchField />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: Theme.spacing.m,
    backgroundColor: Theme.colors.background,
    alignItems: "center",
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: Theme.spacing.m,
  },
  headerContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 3,
    flex: 1,
  },
  textStyle: {
    flex: 1,
    textAlign: "center",
    fontSize: Theme.fontSize.l,
    fontWeight: "bold",
  },
});

export default AppBar;

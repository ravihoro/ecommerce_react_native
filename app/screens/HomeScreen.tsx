import { ScrollView, StyleSheet, Text, View } from "react-native";
import useHomeScreenController from "../controllers/HomeScreenController";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../utils/route_constants";
import { HomeStackNavigationProps } from "../utils/route_types";
import { Theme } from "../utils/theme";
import { ActivityIndicator } from "react-native-paper";
import SearchField from "../components/SearchField";
import HorizontalCategoryList from "../components/HorizontalCategoryList";
import HorizontalProductList from "../components/HorizontalProductList";
import { toTitleCase } from "../utils/helper_functions";

const HomeScreen: React.FC = () => {
  const { categories, menProducts, womenProducts, isLoading, error } =
    useHomeScreenController();

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <ActivityIndicator size="large" color={Theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <SearchField />
      <HorizontalCategoryList categories={categories} />
      <HorizontalProductList products={menProducts} text="Men's Clothing" />
      <HorizontalProductList products={womenProducts} text="Women's Clothing" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.spacing.m,
    backgroundColor: Theme.colors.background,
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";
import { useRoute } from "@react-navigation/native";
import { Routes } from "../utils/route_constants";
import { HomeStackRouteProp } from "../utils/route_types";
import useProductsController from "../controllers/ProuctsController";
import { ActivityIndicator } from "react-native-paper";
import { toTitleCase } from "../utils/helper_functions";
import ProductFlatList from "../components/ProductFlatList";

const ProductsScreen: React.FC = () => {
  const route = useRoute<HomeStackRouteProp<typeof Routes.PRODUCTS>>();

  const category = route.params.category;

  const { products, isLoading, error } = useProductsController(category);

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

  if (products.length === 0) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <Text>No Products</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>
          {toTitleCase(category)} ({products.length})
        </Text>
      </View>

      <ProductFlatList products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.spacing.m,
    backgroundColor: Theme.colors.background,
    alignItems: "center",
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginBottom: Theme.spacing.m,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: Theme.fontSize.m,
  },
});

export default ProductsScreen;

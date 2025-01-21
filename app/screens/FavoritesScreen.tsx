import { StyleSheet, View, Text } from "react-native";
import { Theme } from "../utils/theme";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import ProductFlatList from "../components/ProductFlatList";

const FavoritesScreen: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <Text style={styles.textStyle}>No Favorite Products</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductFlatList products={favorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.m,
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: Theme.fontSize.l,
    fontWeight: "bold",
  },
});

export default FavoritesScreen;

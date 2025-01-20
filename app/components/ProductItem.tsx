import { Dimensions, Image, Pressable, StyleSheet, Text } from "react-native";
import { Product } from "../model/product";
import { Theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";

type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const isFavorite = false;

  const favoritesHandler = () => {};

  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.imageStyle} />
      <Pressable style={styles.iconContainer} onPress={favoritesHandler}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={20}
          color={Theme.colors.primaryIcon}
        />
      </Pressable>

      <Text numberOfLines={1} ellipsizeMode="tail">
        {product.title}
      </Text>

      <Text style={styles.priceStyle}>${product.price}</Text>
    </Pressable>
  );
};

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.spacing.s,
    backgroundColor: Theme.colors.background,
    height: height * 0.25,
    width: width * 0.44,
    margin: 0,
    overflow: "hidden",
    padding: 5,
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    resizeMode: "center",
  },
  iconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 2,
    borderRadius: 50,
    backgroundColor: Theme.colors.primaryLight,
  },
  priceStyle: {
    fontWeight: "bold",
  },
});

export default ProductItem;

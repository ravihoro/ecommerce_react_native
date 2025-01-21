import { Image, StyleSheet, View, Text } from "react-native";
import { CartProduct } from "../model/cart_product";
import { Theme } from "../utils/theme";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import RoundedButton from "./RoundedButton";
import { Ionicons } from "@expo/vector-icons";
import { getPrice } from "../utils/helper_functions";

const CartProductItem: React.FC<CartProduct> = ({ product, quantity }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(product, 1);
  };

  const removeItemHandler = () => {
    removeItemFromCart(product, 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} width={60} />
      <View style={styles.descriptionContainer}>
        <Text>{product.title}</Text>
        <View style={styles.quantityContainer}>
          <RoundedButton onPress={removeItemHandler}>
            <Ionicons name="remove" color={Theme.colors.whiteIcon} />
          </RoundedButton>
          <Text style={styles.quantityStyle}>{quantity}</Text>
          <RoundedButton onPress={addItemHandler}>
            <Ionicons name="add" color={Theme.colors.whiteIcon} />
          </RoundedButton>
        </View>
      </View>

      <Text style={styles.priceStyle}>
        ${getPrice((product.price * quantity).toString())}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.spacing.s,
    backgroundColor: Theme.colors.greyBackground,
    flexDirection: "row",
    borderRadius: Theme.spacing.s,
    marginBottom: Theme.spacing.s,
  },
  descriptionContainer: {
    flex: 1,
    marginHorizontal: Theme.spacing.s,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityStyle: {
    marginHorizontal: Theme.spacing.s,
  },
  priceStyle: {
    fontWeight: "bold",
  },
});

export default CartProductItem;

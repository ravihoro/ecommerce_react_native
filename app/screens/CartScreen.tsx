import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import CostRow from "../components/CostRow";
import { getPrice } from "../utils/helper_functions";
import { TextInput } from "react-native-paper";
import RoundedButton from "../components/RoundedButton";
import { Ionicons } from "@expo/vector-icons";
import CartProductItem from "../components/CartProductItem";

const CartScreen: React.FC = () => {
  const { cartProducts, clearCart, getQuantity, getTotal } =
    useContext(CartContext);

  if (getQuantity() === 0) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <Text>Cart Empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>Cart</Text>
      <Pressable
        style={{ alignSelf: "flex-end", marginVertical: Theme.spacing.s }}
        onPress={clearCart}
      >
        <Text>Remove All</Text>
      </Pressable>

      <FlatList
        data={cartProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <CartProductItem product={item.product} quantity={item.quantity} />
        )}
      />

      <CostRow text="Subtotal" cost={getPrice(getTotal().toString())} />
      <CostRow text="Shipping Cost" cost={"8"} />
      <CostRow text="Tax" cost={"0"} />
      <CostRow
        text="Total"
        cost={getPrice((getTotal() + 8).toString().toString())}
      />

      <View style={styles.textInputContainerStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Discount Here"
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />
        <RoundedButton>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={Theme.colors.whiteIcon}
          />
        </RoundedButton>
      </View>
      <RoundedButton>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
            paddingVertical: Theme.spacing.s,
          }}
        >
          <Text style={styles.checkoutButtonTextStyle}>Checkout</Text>
        </View>
      </RoundedButton>
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
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextStyle: {
    marginTop: Theme.spacing.m,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: Theme.fontSize.m,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: Theme.fontSize.l,
    marginTop: Theme.spacing.s,
  },
  textInputContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Theme.colors.greyBackground,
    borderRadius: 5,
    paddingRight: Theme.spacing.s,
    marginTop: Theme.spacing.m,
    marginBottom: Theme.spacing.l,
  },
  textInputStyle: {
    flex: 1,
    marginLeft: Theme.spacing.s,
    backgroundColor: Theme.colors.greyBackground,
  },
  checkoutButtonTextStyle: {
    color: Theme.colors.whiteIcon,
    fontSize: Theme.fontSize.m,
  },
});

export default CartScreen;

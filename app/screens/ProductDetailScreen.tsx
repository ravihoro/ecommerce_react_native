import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
  ToastAndroid,
} from "react-native";
import { Theme } from "../utils/theme";
import { useRoute } from "@react-navigation/native";
import { HomeStackRouteProp } from "../utils/route_types";
import { Routes } from "../utils/route_constants";
import { useContext, useState } from "react";
import RatingContainer from "../components/RatingContainer";
import RoundedButton from "../components/RoundedButton";
import { Ionicons } from "@expo/vector-icons";
import { getPrice } from "../utils/helper_functions";
import { CartContext } from "../store/cart-context";

const ProductDetailScreen: React.FC = () => {
  const { addItemToCart } = useContext(CartContext);

  const route = useRoute<HomeStackRouteProp<typeof Routes.PRODUCT_DETAIL>>();

  const product = route.params.product;

  const images = [product.image, product.image, product.image];

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          horizontal
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Image
              source={{ uri: item }}
              style={styles.imageContainer}
              resizeMode="contain"
            />
          )}
        />
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <RatingContainer rating={product.rating} />
      </View>
      <Text style={styles.titleStyle}>{product.title}</Text>
      <Text style={styles.priceStyle}>${product.price}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>{product.description}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={{ flex: 1 }}>Quantity</Text>
        <RoundedButton onPress={decrementQuantity}>
          <Ionicons
            name="remove"
            color={Theme.colors.whiteIcon}
            size={Theme.spacing.m}
          />
        </RoundedButton>

        <Text style={styles.quantityText}>{quantity}</Text>

        <RoundedButton onPress={incrementQuantity}>
          <Ionicons
            name="add"
            color={Theme.colors.whiteIcon}
            size={Theme.spacing.m}
          />
        </RoundedButton>
      </View>

      <View style={styles.addToCartButtonStyle}>
        <RoundedButton
          onPress={() => {
            addItemToCart(product, quantity);
            ToastAndroid.show("Product added to cart", ToastAndroid.SHORT);
          }}
        >
          <View style={styles.addToCartChildrenStyle}>
            <Text style={styles.addToCartTextStyle}>
              ${getPrice((quantity * product.price).toString())}
            </Text>
            <Text style={styles.addToCartTextStyle}>Add To Bag</Text>
          </View>
        </RoundedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.m,
  },
  imageContainer: {
    height: 250,
    width: 150,
    marginRight: Theme.spacing.s,
    backgroundColor: Theme.colors.greyBackground,
  },
  titleStyle: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  priceStyle: {
    fontWeight: "bold",
    color: Theme.colors.primary,
    marginBottom: 5,
  },
  descriptionContainer: {
    padding: Theme.spacing.s,
    borderRadius: Theme.spacing.m,
    backgroundColor: Theme.colors.greyBackground,
  },
  descriptionStyle: {
    fontSize: Theme.fontSize.s,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Theme.colors.greyBackground,
    paddingVertical: Theme.spacing.s,
    paddingHorizontal: Theme.spacing.m,
    borderRadius: 50,
    marginVertical: Theme.spacing.m,
  },
  quantityText: {
    marginHorizontal: Theme.spacing.m,
  },
  addToCartButtonStyle: {
    position: "absolute",
    bottom: Theme.spacing.m,
    width: "100%",
    alignSelf: "center",
  },
  addToCartChildrenStyle: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: Theme.spacing.s,
    justifyContent: "space-between",
    alignItems: "center",
  },
  addToCartTextStyle: {
    color: "white",
  },
});

export default ProductDetailScreen;

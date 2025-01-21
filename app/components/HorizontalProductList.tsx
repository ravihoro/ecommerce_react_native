import { FlatList, View } from "react-native";
import { Product } from "../model/product";
import ListHeader from "./ListHeader";
import { Theme } from "../utils/theme";
import ProductItem from "./ProductItem";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../utils/route_types";
import { Routes } from "../utils/route_constants";

type HorizontalProductListProps = {
  products: Product[];
  text: string;
  onPress: () => void;
};

const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  products,
  text,
  onPress,
}) => {
  const { navigate } =
    useNavigation<HomeStackNavigationProps<typeof Routes.PRODUCT_DETAIL>>();

  return (
    <View>
      <ListHeader text={text} onPress={onPress} />
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ProductItem
            product={item}
            onPress={() => {
              navigate(Routes.PRODUCT_DETAIL, { product: item });
            }}
          />
        )}
        contentContainerStyle={{ gap: Theme.spacing.s }}
      />
    </View>
  );
};

export default HorizontalProductList;

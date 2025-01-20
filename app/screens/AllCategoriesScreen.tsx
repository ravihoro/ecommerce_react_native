import { FlatList, StyleSheet, Text, TextStyle, View } from "react-native";
import { Theme } from "../utils/theme";
import {
  HomeStackNavigationProps,
  HomeStackParams,
  HomeStackRouteProp,
} from "../utils/route_types";
import { Routes } from "../utils/route_constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CATEGORY_IMAGES } from "../utils/constants";
import { toTitleCase } from "../utils/helper_functions";
import CategoryRow from "../components/CategoryRow";

type AllCategoriesRouteProp = HomeStackRouteProp<typeof Routes.ALL_CATEGORIES>;

const AllCategoriesScreen: React.FC = () => {
  const route = useRoute<AllCategoriesRouteProp>();

  const categories = route.params.categories;

  const navigation =
    useNavigation<HomeStackNavigationProps<typeof Routes.PRODUCTS>>();

  return (
    <View style={styles.container}>
      <Text style={Theme.textVariants.headerBold as TextStyle}>
        Shop by Categories
      </Text>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => item}
        renderItem={({ item, index }) => (
          <CategoryRow
            imageUrl={CATEGORY_IMAGES[index]}
            text={toTitleCase(item)}
            onPress={() => {
              navigation.navigate(Routes.PRODUCTS, { category: item });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.spacing.m,
    backgroundColor: Theme.colors.background,
    flex: 1,
  },
});

export default AllCategoriesScreen;

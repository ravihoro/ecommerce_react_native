import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";
import { getPrice } from "../utils/helper_functions";

type CostRowProps = {
  text: string;
  cost: string;
};

const CostRow: React.FC<CostRowProps> = ({ text, cost }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
      <Text style={styles.costTextStyle}>${getPrice(cost)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textStyle: {
    color: Theme.colors.greyText,
  },
  costTextStyle: {
    fontWeight: "bold",
  },
});

export default CostRow;

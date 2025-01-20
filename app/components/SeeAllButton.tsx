import { Pressable, Text } from "react-native";
import { Theme } from "../utils/theme";
import { VoidFunctionProps } from "../utils/function_props";

const SeeAllButton: React.FC<VoidFunctionProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={Theme.textVariants.subHeader}>See All</Text>
    </Pressable>
  );
};

export default SeeAllButton;

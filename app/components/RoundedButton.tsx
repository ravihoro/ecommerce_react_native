import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Theme } from "../utils/theme";

interface RoundedButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  children,
  onPress,
  style,
  isDisabled,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, style]}
      disabled={isDisabled}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: Theme.spacing.m,
    backgroundColor: Theme.colors.primary,
    borderRadius: 50,
  },
});

export default RoundedButton;

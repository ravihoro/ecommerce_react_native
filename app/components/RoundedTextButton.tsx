import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import RoundedButton from "./RoundedButton";
import { Theme } from "../utils/theme";

interface RoundedTextButtonProps {
  text: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
  isDisabled?: boolean;
}

const RoundedTextButton: React.FC<RoundedTextButtonProps> = ({
  text,
  onPress,
  style,
  isDisabled,
}) => {
  return (
    <RoundedButton
      style={style}
      onPress={onPress}
      isDisabled={isDisabled ?? false}
    >
      <View style={styles.container}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </RoundedButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    paddingVertical: Theme.spacing.s,
  },
  textStyle: {
    color: Theme.colors.background,
  },
});

export default RoundedTextButton;

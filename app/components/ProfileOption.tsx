import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../utils/theme";

type ProfileOptionProps = {
  text: string;
  onPress?: () => void;
};

const ProfileOption: React.FC<ProfileOptionProps> = ({ text, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{text}</Text>
      <Ionicons name="chevron-forward" size={20} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Theme.spacing.s,
    paddingVertical: Theme.spacing.m,
    backgroundColor: Theme.colors.greyBackground,
    borderRadius: Theme.spacing.s,
    marginBottom: Theme.spacing.m,
  },
});

export default ProfileOption;

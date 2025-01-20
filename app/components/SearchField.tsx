import { Pressable, StyleSheet, View } from "react-native";
import { Theme } from "../utils/theme";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const SearchField: React.FC = () => {
  const [text, setText] = useState("");
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const onChangeHandler = (value: string) => {
    setText(value);
  };

  const onCloseHandler = () => {
    setText("");
  };

  useEffect(() => {
    if (text === "") {
      setShowCloseIcon(false);
    } else {
      if (showCloseIcon === false) setShowCloseIcon(true);
    }
  }, [text]);

  return (
    <View style={styles.inputContainer}>
      <Ionicons name="search" size={Theme.spacing.m} />
      <TextInput
        style={styles.inputStyle}
        value={text}
        onChangeText={onChangeHandler}
        placeholder="Search"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
      />
      {showCloseIcon ? (
        <Pressable onPress={onCloseHandler}>
          <Ionicons name="close" size={Theme.spacing.m} />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Theme.colors.greyBackground,
    borderRadius: 50,
    paddingHorizontal: Theme.spacing.s,
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: Theme.spacing.m,
    fontSize: Theme.fontSize.m,
    backgroundColor: "transparent",
  },
});

export default SearchField;

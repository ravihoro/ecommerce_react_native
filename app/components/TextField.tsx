import { FC, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

interface TextFieldProps {
  placeholder: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  error?: string | null;
  obscureText?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  maxlength?: number;
}

const TextField: FC<TextFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  error,
  obscureText = false,
  keyboardType = "default",
  maxlength,
}) => {
  const [secureText, setSecureText] = useState(true);

  const onPress = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainerStyle}>
        <TextInput
          placeholder={placeholder}
          value={value}
          maxLength={maxlength}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={{ flex: 1, backgroundColor: Theme.colors.greyBackground }}
          secureTextEntry={obscureText && secureText}
          underlineColorAndroid="transparent"
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />
        {obscureText && (
          <Pressable onPress={onPress}>
            <Ionicons
              name={secureText ? "eye-off" : "eye"}
              size={20}
              color={Theme.colors.primaryIcon}
            />
          </Pressable>
        )}
      </View>
      <View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Theme.spacing.m,
  },
  textInputContainerStyle: {
    backgroundColor: Theme.colors.greyBackground,
    paddingRight: Theme.spacing.s,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
  },
  errorText: {
    color: Theme.colors.failure,
    fontSize: Theme.fontSize.s,
  },
});

export default TextField;

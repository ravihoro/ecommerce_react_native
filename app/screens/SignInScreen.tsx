import { useContext, useEffect, useReducer } from "react";
import useSignInController from "../controllers/SignInController";
import { UserContext } from "../store/user-context";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextStyle,
  ToastAndroid,
  View,
} from "react-native";
import { Theme } from "../utils/theme";
import TextField from "../components/TextField";
import { ActivityIndicator } from "react-native-paper";
import RoundedTextButton from "../components/RoundedTextButton";

const SignInScreen: React.FC = () => {
  const {
    email,
    password,
    isLoading,
    emailError,
    passwordError,
    error,
    onEmailChange,
    onPasswordChange,
    onSignIn,
  } = useSignInController();

  const isFormValid = emailError === null && passwordError === null;

  const { addUser } = useContext(UserContext);

  const signIn = async () => {
    Keyboard.dismiss();
    const user = await onSignIn();
    if (user) addUser(user);
  };

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          Theme.textVariants.headerBold as TextStyle,
          styles.headerMargin,
        ]}
      >
        Sign In
      </Text>
      <TextField
        placeholder="Enter Email"
        value={email}
        onChangeText={onEmailChange}
        error={emailError}
      />
      <TextField
        placeholder="Enter Password"
        value={password}
        onChangeText={onPasswordChange}
        error={passwordError}
        obscureText={true}
      />

      {isLoading ? (
        <ActivityIndicator color={Theme.colors.primary} size="large" />
      ) : (
        <RoundedTextButton
          text="Continue"
          style={
            isFormValid
              ? undefined
              : { backgroundColor: Theme.colors.primaryLight }
          }
          isDisabled={!isFormValid}
          onPress={signIn}
        />
      )}

      <Text style={styles.signUpTextStyle}>
        Don't have an account? <Text style={styles.boldText}>Create One</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.m,
    justifyContent: "center",
  },
  headerMargin: {
    marginBottom: Theme.spacing.m,
  },
  signUpTextStyle: {
    fontSize: Theme.fontSize.s,
    marginTop: Theme.spacing.s,
  },
  boldText: {
    fontWeight: "bold",
    color: Theme.colors.primary,
  },
});

export default SignInScreen;

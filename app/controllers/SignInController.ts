import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validators";
import { signIn } from "../services/SignInService";
import { User } from "../model/user";

const useSignInController = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [emailError, setEmailError] = useState<string | null>();

  const [password, setPassword] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | null>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const onEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const onPasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const onSignIn = async () => {
    setIsLoading(true);
    try {
      const user: User = await signIn({
        email: email!,
        password: password!,
      });
      return user;
    } catch (error: any) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    isLoading,
    emailError,
    passwordError,
    error,
    onEmailChange,
    onPasswordChange,
    onSignIn,
  };
};

export default useSignInController;

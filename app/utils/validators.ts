export const validateEmail = (email: string | undefined) => {
  if (email === "") return "Email cannot be empty";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email != null && !emailRegex.test(email)) return "Invalid Email";

  return null;
};

export const validatePassword = (password: string | undefined) => {
  if (password === "") return "Password cannot be empty";

  return password != null && password.length > 5
    ? null
    : "Password must be at least 6 characters";
};

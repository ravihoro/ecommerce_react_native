import { BASE_URL } from "../utils/constants";

export const getCategories = async () => {
  var url = `${BASE_URL}/categories`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Not found");
  var json = await response.json();
  return json;
};

export const getProducts = async (category: string) => {
  var url = `${BASE_URL}/category/${category}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Not found");
  var json = await response.json();
  return json;
};

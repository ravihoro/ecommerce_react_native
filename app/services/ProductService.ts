import { BASE_URL } from "../utils/constants";

export const getCategories = async () => {
  var url = `${BASE_URL}/categories`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Not found");
  var json = await response.json();
  return json;
};

export const getProducts = async (category: string) => {
  const response = await fetch(`${BASE_URL}/${category}`);
  if (!response.ok) throw new Error("Not found");
  return await response.json();
};

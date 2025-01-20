import { useEffect, useState } from "react";
import { Product } from "../model/product";
import { getCategories, getProducts } from "../services/ProductService";

const useHomeScreenController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const categoriesList = await getCategories();
        console.log(`categories::: ${categoriesList}`);
        if (
          Array.isArray(categoriesList) &&
          categoriesList.every((item) => typeof item === "string")
        ) {
          console.log("json is a list of strings");
        } else {
          console.log("json is not a list of strings");
        }
        setCategories(categoriesList);
      } catch (e: any) {
        setError((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return {
    categories,
    isLoading,
    error,
  };
};

export default useHomeScreenController;

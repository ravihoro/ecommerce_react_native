import { useEffect, useState } from "react";
import { Product } from "../model/product";
import { getCategories, getProducts } from "../services/ProductService";

const useHomeScreenController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const [categories, setCategories] = useState<string[]>([]);
  const [menProducts, setMenProducts] = useState<Product[]>([]);
  const [womenProducts, setWomenProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const categoriesList = await getCategories();

        const menProductList = await getProducts(categoriesList[2]);
        const womenProductList = await getProducts(categoriesList[3]);

        setCategories(categoriesList);
        setMenProducts(menProductList);
        setWomenProducts(womenProductList);
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
    menProducts,
    womenProducts,
    isLoading,
    error,
  };
};

export default useHomeScreenController;

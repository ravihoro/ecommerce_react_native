import { useEffect, useState } from "react";
import { Product } from "../model/product";
import { getProducts } from "../services/ProductService";

const useProductsController = (category: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getProducts(category);
        setProducts(response);
      } catch (e: any) {
        setError((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    isLoading,
    error,
  };
};

export default useProductsController;

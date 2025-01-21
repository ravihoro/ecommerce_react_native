import { Children, createContext, FC, ReactNode, useState } from "react";
import { CartProduct } from "../model/cart_product";
import { Product } from "../model/product";

interface CartContextType {
  cartProducts: CartProduct[];
  getQuantity: () => number;
  getTotal: () => number;
  addItemToCart: (product: Product, quantity: number) => void;
  removeItemFromCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  getQuantity: () => 0,
  getTotal: () => 0,
  addItemToCart: (product: Product, quantity: number) => {},
  removeItemFromCart: (product: Product, quantity: number) => {},
  removeFromCart: (id: number) => {},
  clearCart: () => {},
});

export const CartContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartProducts, setProducts] = useState<CartProduct[]>([]);

  const getQuantity = () => {
    let count = 0;
    cartProducts.map((e: CartProduct) => {
      count += e.quantity;
    });
    return count;
  };

  const getTotal = () => {
    let total = 0;
    cartProducts.map((e: CartProduct) => {
      total += e.product.price * e.quantity;
    });

    return total;
  };

  const addItemToCart = (product: Product, quantity: number) => {
    const productIndex = cartProducts.findIndex(
      (item: CartProduct) => item.product.id == product.id
    );

    if (productIndex != -1) {
      const updatedProducts = [...cartProducts] as CartProduct[];
      updatedProducts[productIndex].quantity += quantity;
      setProducts(updatedProducts);
    } else {
      setProducts((products: CartProduct[]) => [
        ...products,
        { product, quantity },
      ]);
    }
  };

  const removeItemFromCart = (product: Product, quantity: number) => {
    const productIndex = cartProducts.findIndex(
      (e: CartProduct) => e.product.id === product.id
    );

    if (productIndex != -1) {
      const updatedProducts = [...cartProducts];
      const updatedQuantity = updatedProducts[productIndex].quantity - quantity;
      if (updatedQuantity === 0) {
        removeFromCart(updatedProducts[productIndex].product.id);
      } else {
        updatedProducts[productIndex].quantity = updatedQuantity;
        setProducts(updatedProducts);
      }
    }
  };

  const removeFromCart = (id: number) => {
    setProducts((products) =>
      products.filter((item) => item.product.id !== id)
    );
  };

  const clearCart = () => {
    setProducts([]);
  };

  const value = {
    cartProducts,
    addItemToCart,
    removeItemFromCart,
    removeFromCart,
    getQuantity,
    getTotal,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

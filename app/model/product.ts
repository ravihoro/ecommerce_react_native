export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  imag: string;
  rating: Rating;
};

export type Rating = {
  rate: number;
  count: number;
};

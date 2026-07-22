export type ProductSize ="XS"| "S"| "M"| "L" |"XL";

export type Product = {
  id: number;

  title: string;
  slug: string;
  description: string;

  price: number;
  discount?: number;

  category: string;

  images: string[];

  colors: string[];

  sizes: ProductSize[];

  stock: number;

  isNew?: boolean;
  isBestSeller?: boolean;
};
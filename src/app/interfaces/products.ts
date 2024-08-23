export interface Specifications {
  [key: string]: string | number | boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  image: string[];
  specifications: Specifications;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export interface EcommerceData {
  categories: Category[];
}

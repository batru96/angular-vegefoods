export interface ProductModel {
  id: string;
  name: string;
  price: string;
  priceSale?: string;
  status?: string;
  image: string;
}

export interface CartModel {
  [key: string]: {
    product: ProductModel;
    quantity: number;
  };
}
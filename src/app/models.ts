export interface ProductModel {
  id: string;
  name: string;
  price: string;
  priceSale?: string;
  status?: string;
  image: string;
}

export type CartItem = ProductModel & {
  quantity: number;
}
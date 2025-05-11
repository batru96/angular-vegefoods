export interface ProductModel {
  id: string;
  name: string;
  price: number;
  priceSale?: number;
  status?: string;
  image: string;
}

export type CartItem = ProductModel & {
  quantity: number;
}
export interface ProductModel {
  id: string;
  name: string;
  price: number;
  priceSale?: number;
  status?: string;
  image: string;
}

export type CartItem = Omit<ProductModel, 'priceSale'> & {
  quantity: number;
}

export type AppConfig = {
  currency: string;
}

export type Coupon = {
  id: string;
  name: string;
  discount: number;
}
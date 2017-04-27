export interface IProduct {
  name: string;
  price: number;
}

export interface IProductList {
  products: IProduct[];
  loading: boolean;
  error: any;
}

export function createDefaultProductList(): IProductList {
  return {
    products: [],
    loading: false,
    error: false
  };
}

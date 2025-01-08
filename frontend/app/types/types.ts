//Admin page types

export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

export type Order = {
  id: number;
  customerName: string;
  totalAmount: number;
  status: string;
};

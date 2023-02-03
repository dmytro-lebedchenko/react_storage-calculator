export interface Provider {
  id: number;
  title: string;
  minPayment: number;
  maxPayment: number;
  color: string;
  options: {
    title: string,
    storagePrice: number,
    transferPrice: number,
    bonus: number,
  }[];
};

export type TMedicine = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  prescriptionRequired: boolean;
  manufacturer: string;
  expiryDate: Date;
  category: string;
  symptoms: string[];
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

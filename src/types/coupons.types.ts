export type TCoupon = {
  _id: string;
  code: string;
  discountValue: number;
  minOrderAmount: number;
  maxDiscountAmount: number;
  startDate: string; 
  endDate: string; 
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string; 
  updatedAt: string; 
  __v: number;
};

export type TDiscountData = {
  coupon: string;
  totalPrice: number;
};

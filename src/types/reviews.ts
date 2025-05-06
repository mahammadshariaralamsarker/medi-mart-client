export type TCreateReview = {
  userId: string;
  medicineId: string;
  review: string;
  ratings: number;
};


type TReviewUser={
  _id: string;
  name: string;
  email: string;
  image: string | null;
  role: string;
  phone: string;
  address: string;
  city: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TReview ={
  _id: string;
  userId: TReviewUser;
  medicineId: string;
  ratings: number;
  review: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
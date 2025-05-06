export type TUser = {
  userEmail: string;
  accountStatus: "active" | "deactivate";
  role: "Customer" | "Admin";
  image: string;
  name: string;
  userId: string;
  iat?: number;
  exp?: number;
};

export type TLoggedInUser = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: "Customer" | "Admin";
  image: string;
  phone: string;
  address: string;
  city: string;
  status: "active" | "deactivate";
};




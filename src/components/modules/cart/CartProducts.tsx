"use client";

import { useAppSelector } from "@/redux/hooks";
import CustomerCartProductCard from "./CustomerCartProductCard";
import {
  cartMedicineSelector,
  ICartMedicine,
} from "@/redux/features/cart/cartSlice";

export default function CartProducts() {
  const medicinesAll = useAppSelector(cartMedicineSelector);
  return (
    <div className=" border rounded-md lg:col-span-8 h-full row-span-3 p-10 space-y-5">
      {medicinesAll?.map((medicne: ICartMedicine) => (
        <CustomerCartProductCard key={medicne._id} medicne={medicne} />
      ))}
    </div>
  );
}

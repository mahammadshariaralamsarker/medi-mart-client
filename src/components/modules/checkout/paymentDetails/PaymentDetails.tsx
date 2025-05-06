/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  cartClear,
  cartMedicineSelector,
  couponDetailsSelector,
  deliveryAddressDetailsSelector,
  deliveryAreaSelector,
  deliveryOptionSelector,
  discountAmountSelector,
  grandTotalSelector,
  isPrescritionRequiredSelector,
  orderSelector,
  prescriptionUrlSelector,
  shippingCostSelector,
  subTotalSelector,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createOrder } from "@/services/OrderServices";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
export default function PaymentDetails() {
  const subTotal = useAppSelector(subTotalSelector);
  const shippingCost = useAppSelector(shippingCostSelector);
  const oroderInfo = useAppSelector(orderSelector);
  const grandTotal = useAppSelector(grandTotalSelector);
  // Delivery Area Selector
  const deliveryarea = useAppSelector(deliveryAreaSelector);
  const deliveryOption = useAppSelector(deliveryOptionSelector);
  const deliveryDetailsAddress = useAppSelector(deliveryAddressDetailsSelector);
  const isPrescritionRequired = useAppSelector(isPrescritionRequiredSelector);
  const prescritionRequiredUrl = useAppSelector(prescriptionUrlSelector);
  const carMedicines = useAppSelector(cartMedicineSelector);
  const discountAmount = useAppSelector(discountAmountSelector);
  const coupons = useAppSelector(couponDetailsSelector);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  // Handle Order Now
  const handleOrderNow = async () => {
    const orderLoading = toast.loading("Order is being placed...");
    try {
      if (!user) {
        router.push(`/login?redirectPath=${pathname}`);
        throw new Error("Please Login First!");
      }
      if (carMedicines?.length === 0) {
        throw new Error("Cart is Empty! What are you trying to order??");
      }
      if (!deliveryarea) {
        throw new Error("City is Missing!");
      }
      if (!deliveryOption) {
        throw new Error("Delivery Option is Missing!");
      }
      if (!deliveryDetailsAddress) {
        throw new Error("Delivery Details is Missing!");
      }
      if (isPrescritionRequired && !prescritionRequiredUrl) {
        throw new Error("Prescription is Missing!");
      }

      let orderData;
      if (coupons?.code) {
        orderData = { ...oroderInfo, coupon: coupons?.code };
      } else {
        orderData = oroderInfo;
      }
      const res = await createOrder(orderData);
      if (res?.success) {
        toast.success(res?.message, { id: orderLoading });
        dispatch(cartClear());
        router.push(res?.data);
      }
      if (!res?.success) {
        toast.error(res?.message, { id: orderLoading });
      }
    } catch (error: any) {
      toast.error(error?.message, { id: orderLoading });
    }
  };
  return (
    <div className=" border bg-white rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{currencyFormatter(subTotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">{currencyFormatter(discountAmount)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">
            {currencyFormatter(shippingCost as number)}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
      </div>
      <Button
        onClick={handleOrderNow}
        className="w-full text-xl font-semibold py-5"
      >
        Payment Now
      </Button>
    </div>
  );
}

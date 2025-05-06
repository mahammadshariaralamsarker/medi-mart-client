"use client";
import CartProducts from "@/components/modules/cart/CartProducts";
import CommonBanner from "@/components/modules/shared/CommonBanner/CommonBanner";
import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";
import { Button } from "@/components/ui/button";
import { cartMedicineSelector } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React from "react";

const CartPage = () => {
  const router = useRouter();
  const medicineData = useAppSelector(cartMedicineSelector);
  // Handle Procced
  const handleProcced = () => {
    router.push("/checkout");
  };
  return (
    <div>
      <div>
        <CommonBanner mainComponentTitle="Shop" subComponentTitle="Cart" />
        <MyContainer>
          <h3 className="text-center font-bold text-lg md:text-3xl mb-3">
            Your Cart List
          </h3>
          <div className=" max-w-4xl mx-auto">
            <CartProducts />
            <div className="text-right mt-2">
              <Button
                onClick={handleProcced}
                disabled={medicineData?.length === 0}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default CartPage;

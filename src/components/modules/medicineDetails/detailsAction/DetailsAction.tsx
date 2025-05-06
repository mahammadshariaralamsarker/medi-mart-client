'use client'
import { Button } from '@/components/ui/button';
import { useUser } from "@/context/UserContext";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TMedicine } from "@/types/medicines.types";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const DetailsAction = ({ medicineData }: { medicineData: TMedicine }) => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // Handle Add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(medicineData));
  };

  // Handle Bue Now
  const handleByNow = () => {
    if (!user) {
      router.push(`/login?redirectPath=${pathname}`);
    } else {
      dispatch(addToCart(medicineData));
      router.push("/checkout");
    }
  };
  return (
    <div>
      <Button
        onClick={handleAddToCart}
        variant="outline"
        className="w-full my-3"
      >
        Add To Cart
      </Button>
      <Button onClick={handleByNow} className="w-full">
        Buy Now
      </Button>
    </div>
  );
};

export default DetailsAction

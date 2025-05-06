/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TDiscountData } from "@/types/coupons.types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// Create Coupons
export const createCoupon = async (data: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coupon/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("COUPON");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get Discount
export const getDiscountInfo = async (couponInfo: TDiscountData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/discount`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(couponInfo),
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get All Coupons
export const getAllCoupons = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/coupon`, {
      next: {
        tags: ["COUPON"],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Delete Coupon
export const deleteCoupon = async (couponId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coupon/${couponId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
      }
    );
    revalidateTag("COUPON");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

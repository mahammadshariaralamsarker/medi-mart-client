/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { TCreateReview } from "@/types/reviews";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// Create  Review
export const createReviews = async (payload: TCreateReview) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/review/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(payload),
      }
    );
    revalidateTag("REVIEWS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get All  Review
export const getAllReviews = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/review`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
      },
      next: {
        tags: ["REVIEWS"],
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get Single Medicines  Review
export const getSingleMedicinesReviews = async (medicineId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/review/${medicineId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        next: {
          tags: ["REVIEWS"],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

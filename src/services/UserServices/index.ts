/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";

// Get All Users
export const getAllUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
      },
      next: {
        tags: ["USERS"],
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

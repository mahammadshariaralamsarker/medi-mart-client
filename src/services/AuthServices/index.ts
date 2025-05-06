/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { revalidateTag } from "next/cache";

// Register User
export const userRegister = async (userInfo: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("medi_mart_tk", result?.data?.accessToken);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// Login User
export const userLogin = async (userInfo: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("medi_mart_tk", result?.data?.accessToken);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// Get Current Logedin User From Cookie
export const getCurrentUser = async () => {
  const accesstoken = (await cookies()).get("medi_mart_tk")?.value;
  let decodeData = null;
  if (accesstoken) {
    decodeData = await jwtDecode(accesstoken);
    return decodeData;
  } else {
    return null;
  }
};

export const logOutUser = async () => {
  (await cookies()).delete("medi_mart_tk");
};

// Get LoggedIn User Info
export const getLoggedInUserInfo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
      },
      next: {
        tags: ["LOGGEDINUSER"],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Update Single User Info
export const updateUserInfo = async (userInfo: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/info/update`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(userInfo),
      }
    );
    revalidateTag("LOGGEDINUSER");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

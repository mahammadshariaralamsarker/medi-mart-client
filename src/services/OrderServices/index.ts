/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TOrderDetails } from "@/types/order.types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// Create Order
export const createOrder = async (data: TOrderDetails) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("MYORDER");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get my Orders
export const getMyOrders = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/my-orders`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        next: {
          tags: ["MYORDER"],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Verify my Orders
export const verifyMyOrders = async (order_id: string) => {
  console.log(order_id);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/verify?order_id=${order_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
      }
    );
    revalidateTag("MYORDER");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get All Orders For Admin
export const getAllOrdersForAdmin = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/all-orders`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        next: {
          tags: ["ORDERMANAGEADMIN"],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get Single Order For Admin
export const getSingleOrdersForAdmin = async (orderId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/single-order/${orderId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        next: {
          tags: ["ORDERMANAGEADMIN"],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Update Single Order Checking Status For Admin
export const updateSingleOrderCheckingStatusForAdmin = async (
  orderId: string,
  checkingStatus: { status: string }
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/update-order-checking/${orderId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(checkingStatus),
        next: {
          tags: ["ORDERMANAGEADMIN"],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Update Single Order Delivery Status For Admin
export const updateSingleOrderDeliveryStatusForAdmin = async (
  orderId: string,
  deliveryStatus: { status: string }
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/update-order/${orderId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(deliveryStatus),
        next: {
          tags: ["ORDERMANAGEADMIN"],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Delete Single Order  For Admin
export const deleteSingleOrderForAdmin = async (orderId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/delete-order/${orderId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
      }
    );
    revalidateTag("ORDERMANAGEADMIN");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get Single User Order  For Admin
export const getSingleUserOrderForAdmin = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/specific-user-orders/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get Statics Info For Admin
export const getStaticsInfoForAdmin = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/earning-order`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

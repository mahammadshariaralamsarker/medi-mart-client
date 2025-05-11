import ManageOrders from "@/components/modules/order";
import { getMyOrders, verifyMyOrders } from "@/services/OrderServices";
import React from "react";

const OrdersPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchId = await searchParams; 
  console.log(searchId, "searchId");
  const { data: myOrders } = await getMyOrders();
  await verifyMyOrders(searchId?.order_id as string);

  return (
    <div className="max-w-4xl mx-auto">
      <ManageOrders myOrders={myOrders} />
    </div>
  );
};

export default OrdersPage;

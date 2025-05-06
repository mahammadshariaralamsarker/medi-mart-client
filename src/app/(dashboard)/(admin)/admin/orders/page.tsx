import AdminOrderManage from "@/components/modules/adminOrderManage";
import { getAllOrdersForAdmin } from "@/services/OrderServices";
import React from "react";

const OrdersPage = async () => {
  const { data: allOrders } = await getAllOrdersForAdmin();
  return (
    <div>
      <AdminOrderManage allOrders={allOrders} />
    </div>
  );
};

export default OrdersPage;

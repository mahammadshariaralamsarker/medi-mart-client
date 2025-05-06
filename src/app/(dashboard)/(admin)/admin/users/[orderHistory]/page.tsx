import UserOrderDetails from '@/components/modules/user/UserOrderDetails/UserOrderDetails'
import { getSingleUserOrderForAdmin } from '@/services/OrderServices';
import React from 'react'

const OrderHistoryPage = async ({
  params,
}: {
  params: Promise<{ orderHistory: string }>;
}) => {
    const { orderHistory } = await params;
    const {data:userOrderHistory}  = await getSingleUserOrderForAdmin(orderHistory)
  return (
    <div>
      <UserOrderDetails userOrderHistory={userOrderHistory} />
    </div>
  );
};

export default OrderHistoryPage

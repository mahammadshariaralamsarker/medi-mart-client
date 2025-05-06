import ViewSingleMedicine from '@/components/modules/adminOrderManage/viewSingleMedicine/ViewSingleMedicine';
import { getSingleOrdersForAdmin } from '@/services/OrderServices';
import React from 'react'

const OrderedMedicineDetails = async({
  params,
}: {
  params: Promise<{ orderDetails: string }>;
}) => {
    const { orderDetails } = await params;
    const { data:singleMedicine } = await getSingleOrdersForAdmin(orderDetails);
  return (
    <div>
      <ViewSingleMedicine singleMedicine={singleMedicine} />
    </div>
  );
};

export default OrderedMedicineDetails

import UpdateMedicineForm from '@/components/modules/medicine/updateMedicineForm/UpdateMedicineForm'
import { getSingleMedicines } from '@/services/Medicine';
import React from 'react'

const UpdateMedicinePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await getSingleMedicines(id);
  return (
    <div>
      <UpdateMedicineForm singleMedicine={data} />
    </div>
  );
};

export default UpdateMedicinePage

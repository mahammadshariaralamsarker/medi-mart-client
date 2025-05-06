import MedicineDetails from "@/components/modules/medicineDetails";
import CommonBanner from "@/components/modules/shared/CommonBanner/CommonBanner";
import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";
import { getSingleMedicines } from "@/services/Medicine";
import React from "react";

const MedicineDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: medicineInfo } = await getSingleMedicines(id);
  return (
    <div>
      <CommonBanner mainComponentTitle="Medicine" subComponentTitle="Details" />
      <MyContainer>
        <MedicineDetails medicineInfo={medicineInfo} />
      </MyContainer>
    </div>
  );
};

export default MedicineDetailsPage;

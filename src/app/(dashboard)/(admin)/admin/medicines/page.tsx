import ManageMedicines from "@/components/modules/medicine";
import { getAllMedicines } from "@/services/Medicine";
import React from "react";
type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const MedicinesPage = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const query = await searchParams;
  const { data: medicineData } = await getAllMedicines(undefined, "", query);
  return (
    <div>
      <ManageMedicines medicines={medicineData?.data} />
    </div>
  );
};

export default MedicinesPage;

'use client'
import { TMedicine } from "@/types/medicines.types";
import ShopItem from "../shopItem/ShopItem";

const MedicinesList =({ medicines }: { medicines: TMedicine[] }) => {

  return (
   
    <>
      {medicines?.map((medicine: TMedicine) => (
          <ShopItem key={medicine._id} medicine={medicine} />
        ))}
    </>
    
  );
};

export default MedicinesList;

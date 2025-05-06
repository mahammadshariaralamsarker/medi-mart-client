'use client'
import { TMedicine } from "@/types/medicines.types";
import ShopItem from "../shopItem/ShopItem";

const MedicinesList =({ medicines }: { medicines: TMedicine[] }) => {

  return (
    // <div className="flex-1">
    //   <div className="grid xl:grid-cols-3 xl:gap-5 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-3 grid-cols-1 gap-2">
    //     {medicines?.map((medicine: TMedicine) => (
    //       <ShopItem key={medicine._id} medicine={medicine} />
    //     ))}
    //   </div>
    // </div>
    <>
      {medicines?.map((medicine: TMedicine) => (
          <ShopItem key={medicine._id} medicine={medicine} />
        ))}
    </>
    
  );
};

export default MedicinesList;

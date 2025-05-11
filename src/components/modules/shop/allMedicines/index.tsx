import { TMedicine } from "@/types/medicines.types";
import FilterSidebar from "../filterSidebar/filterSidebar";
import { getAllMedicineCategories } from "@/services/Medicine";
import MedicinesList from "./medicinesList";
import LoadMore from "../loadmore/loadmore";

const AllMedicines = async ({ medicines }: { medicines: TMedicine[] }) => {
  const { data: medicineCat } = await getAllMedicineCategories();

  return (
    <div className="grid lg:grid-cols-12 lg:gap-3  ">
      <div className=" lg:block lg:col-span-3 xl:col-span-3 md:col-span-6">
        <FilterSidebar medicineCat={medicineCat} />
      </div>
      <div className="col-span-12 lg:col-span-9 xl:col-span-9 md:col-span-6">
        <div className="grid xl:grid-cols-3 xl:gap-5 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-3 grid-cols-1 gap-2">
          <MedicinesList medicines={medicines} />
          <LoadMore />
        </div>
      </div>
    </div>
  );
};

export default AllMedicines;

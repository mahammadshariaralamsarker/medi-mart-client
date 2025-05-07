import { TMedicine } from "@/types/medicines.types";
import FilterSidebar from "../filterSidebar/filterSidebar";
import { getAllMedicineCategories } from "@/services/Medicine";
import MedicinesList from "./medicinesList";
import LoadMore from "../loadmore/loadmore";

const AllMedicines = async ({ medicines }: { medicines: TMedicine[] }) => {
  const { data: medicineCat } = await getAllMedicineCategories();

  return (
    <div className="flex gap-5 my-10 relative">
      {/* Sidebar */}
      <FilterSidebar medicineCat={medicineCat} /> 
      <div className="flex-1">
        <div className="grid xl:grid-cols-3 xl:gap-5 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-3 grid-cols-1 gap-2">
          <MedicinesList medicines={medicines} />
          <LoadMore/>
        </div>
      </div>
    </div>
  );
};

export default AllMedicines;

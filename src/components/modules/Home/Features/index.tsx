import React from 'react'
import MyContainer from '../../shared/MyContainer/MyContainer'
import SectionTitle from '../../shared/SectionTitle/SectionTitle'
import FeaturesItem from './FeaturesItem/FeaturesItem';
import { TMedicine } from "@/types/medicines.types";

const FeaturesSection = ({
  allMedicineInfo,
}: {
  allMedicineInfo: TMedicine[];
}) => {
  return (
    <div>
      <MyContainer>
        <div>
          <SectionTitle
            sectionTitle="Features Medicines"
            sectionSubTitle="Latest Medicines Here"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6 2xl:grid-cols-4 2xl:gap-8">
          {allMedicineInfo?.slice(0, 4)?.map((item) => (
            <FeaturesItem medicine={item} key={item?._id} />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default FeaturesSection

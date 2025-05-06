import React from 'react'
import CommonBanner from '../shared/CommonBanner/CommonBanner'
import MyContainer from '../shared/MyContainer/MyContainer';
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { getAllMedicines } from "@/services/Medicine";
import AllMedicines from "./allMedicines";
type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ShopManage = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const query = await searchParams;
  const { data: medicines } = await getAllMedicines(1, "", query);
  return (
    <div>
      <CommonBanner mainComponentTitle="Home" subComponentTitle="Shop" />
      <MyContainer>
        <SectionTitle
          sectionSubTitle="Latest Breakthroughs in Medicine"
          sectionTitle="Latest Medicines"
        />
        <div>
          <AllMedicines medicines={medicines?.data} />
        </div>
      </MyContainer>
    </div>
  );
};

export default ShopManage

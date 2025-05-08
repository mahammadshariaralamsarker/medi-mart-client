/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Banner from "./Banner/Banner";
import FeaturesSection from "./Features";
import CustomerReviews from "./CustomerReviews";
import { getAllMedicines } from "@/services/Medicine";
import { getAllReviews } from "@/services/ReviewServices";
import SpecialSection from "./SpecialSection";
import FeatureStories from "./FeatueStories";
import NewsletterSection from "./NewsLetterSection";
import MoreInfoPage from "./MoreInformation";
import FAQPage from "./FAQ";

const HomePageManage = async ({ searchParams }: { searchParams: any }) => {
  const { query } = await searchParams;
  const { searchTerm } = await searchParams;
  const { data: allMedicineInfo } = await getAllMedicines(
    undefined,
    searchTerm,
    query
  );
  const { data: allReviews } = await getAllReviews();
  return (
    <div>
      <Banner />
      <FeaturesSection allMedicineInfo={allMedicineInfo?.data} />
      <CustomerReviews allReviews={allReviews} />
      <FeatureStories />
      <SpecialSection />
      <NewsletterSection />
      <MoreInfoPage/>
      <FAQPage/>
    </div>
  );
};

export default HomePageManage;

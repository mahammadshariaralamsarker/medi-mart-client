import React from 'react'
import ReviewsItem from './reviewsItem/ReviewsItem'
import CreateReview from "./createReview/CreateReview";
import { getSingleMedicinesReviews } from "@/services/ReviewServices";
import { TReview } from "@/types/reviews";

const Reviews = async ({ medicineId }: { medicineId: string }) => {
  const { data: reviewsData } = await getSingleMedicinesReviews(medicineId);
  return (
    <div className="max-w-lg mt-6">
      <div className="flex justify-around mb-4">
        <h4 className="font-bold">Reviews ( {reviewsData?.length} )</h4>
        <CreateReview />
      </div>

      {reviewsData?.length > 0 ? (
        <>
          {reviewsData?.map((review: TReview) => (
            <ReviewsItem key={review._id} review={review} />
          ))}
        </>
      ) : (
        <div className="text-center p-4">
          <p>No Review Found</p>
        </div>
      )}
    </div>
  );
};

export default Reviews

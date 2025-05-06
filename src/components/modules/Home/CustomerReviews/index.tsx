"use client";
import React, { useEffect } from "react";
import MyContainer from "../../shared/MyContainer/MyContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import ReviewItem from "./ReviewItem/ReviewItem";
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TReview } from "@/types/reviews";
const CustomerReviews = ({ allReviews }: { allReviews: TReview[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className="">
      <MyContainer>
        <div>
          <SectionTitle
            sectionTitle="Coustomers Reviews"
            sectionSubTitle="Read trusted reviews from our customers"
          />
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {allReviews?.slice(0, 6)?.map((item: TReview) => (
              <CarouselItem
                key={item?._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <ReviewItem reviewItem={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-end mt-2 gap-2">
          <Button size="sm" onClick={() => api?.scrollTo(current - 1)}>
            <ArrowLeft />
          </Button>
          <Button size="sm" onClick={() => api?.scrollTo(current + 1)}>
            <ArrowRight />
          </Button>
        </div>
      </MyContainer>
    </div>
  );
};

export default CustomerReviews;

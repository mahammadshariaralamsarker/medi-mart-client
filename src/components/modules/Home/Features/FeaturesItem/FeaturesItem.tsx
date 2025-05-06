import { TMedicine } from "@/types/medicines.types";
import { Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturesItem = ({ medicine }: { medicine: TMedicine }) => {
  return (
        <Link href={`/medicine/${medicine?._id}`} className="block">
    <article className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md overflow-hidden">
      <div className="flex flex-col">
          <Image
            width={500}
            height={200}
            src={medicine?.imageUrl}
            alt={medicine?.name}
            className="w-full h-40 object-cover"
          />
    

        <div className="flex flex-col justify-between px-4 py-3 sm:px-5 sm:py-4">
         
            <h3 className="text-base hover:text-2xl font-semibold   sm:text-lg line-clamp-1  transition">
              {medicine?.name}
            </h3>
     

          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {medicine?.description?.slice(0, 80)}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <Stethoscope className="size-4 text-primary" />
            <span className="text-xs">{medicine?.category}</span>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default FeaturesItem;

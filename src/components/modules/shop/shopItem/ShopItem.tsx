"use client";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TMedicine } from "@/types/medicines.types";
import { FileText, MoveRight, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ShopItem = ({ medicine }: { medicine: TMedicine }) => {
  const dispatch = useAppDispatch();

  // Handle Add to cart
  const handleAddToCart = (medicineData: TMedicine) => {
    dispatch(addToCart(medicineData));
  };
  return (
    <div className="block rounded-lg p-4 bg-slate-50 shadow-xs shadow-indigo-100">
      <Image
        width={200}
        height={200}
        src={medicine?.imageUrl}
        className="h-56 w-full rounded-md object-cover"
        alt={medicine.name}
      />
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-600">
              {currencyFormatter(medicine?.price)}
            </dd>
          </div>

          <div>
            <dt className="sr-only">Medicne Name</dt>

            <dd className="font-medium">{medicine?.name?.slice(0, 40)}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-3 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Stethoscope className="size-5 text-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Category</p>

              <p className="font-medium">{medicine?.category?.slice(0, 20)}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FileText className="size-5 text-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Prescription</p>

              <p className="font-medium">
                {medicine?.prescriptionRequired === true ? "Yes" : "No"}
              </p>
            </div>
          </div>

          <Link
            href={`medicine/${medicine?._id}`}
            className=" hover:text-primary sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
          >
            <div className="mt-1.5 sm:mt-0">
              <p className="">Details</p>
            </div>
            <MoveRight className="size-5" />
          </Link>
        </div>
        <div className="mt-3">
          <Button
            onClick={() => handleAddToCart(medicine)}
            size="sm"
            className="w-full"
          >
            Add To cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;

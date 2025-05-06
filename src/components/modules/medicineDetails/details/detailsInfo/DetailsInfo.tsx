import { currencyFormatter } from "@/lib/currencyFormatter";
import { TMedicine } from "@/types/medicines.types";
import React from "react";

const DetailsInfo = ({ medicineInfo }: { medicineInfo: TMedicine }) => {
  return (
    <div className="flow-root max-w-2xl mt-10">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>
          <dd className="text-gray-700 sm:col-span-2">{medicineInfo?.name}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Category</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {medicineInfo?.category}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Price</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {currencyFormatter(medicineInfo?.price)}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Stock</dt>
          <dd className="text-gray-700 sm:col-span-2">{medicineInfo?.stock}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Prescription Required</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {medicineInfo?.prescriptionRequired}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Manufacturer</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {medicineInfo?.manufacturer}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Symptoms</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {medicineInfo?.symptoms.join(",")}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Expired Date</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {new Date(medicineInfo?.expiryDate).toLocaleDateString()}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Description</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {medicineInfo?.description}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default DetailsInfo;

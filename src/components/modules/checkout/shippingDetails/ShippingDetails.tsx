"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cities } from "@/constants/cities";
import { deliveryOptions } from "@/constants/deliveryOptions";
import {
  isPrescritionRequiredSelector,
  updateDeliveryArea,
  updateDeliveryDetailsAddress,
  updateDeliveryOption,
  updatePrescriptionUrl,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import uploadImage from "@/utils/uploadImageToCloudinary";
import { ChangeEvent } from "react";

export default function ShippingDetails() {
  const dispatch = useAppDispatch();
  const isRequiredrescription = useAppSelector(isPrescritionRequiredSelector);
  // Handle Shipping Address Change
  const handleShippingChange = (address: string) => {
    dispatch(updateDeliveryDetailsAddress(address));
  };

  // Handle Prescrition Image
  const handlePrescriptionImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    let prescriptionUrl = null;
    if (file) {
      prescriptionUrl = await uploadImage(file);
    }
    if (prescriptionUrl) {
      dispatch(updatePrescriptionUrl(prescriptionUrl));
    }
  };
  return (
    <div className=" border bg-white rounded-md col-span-4  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold text-center">Shipping Details</h1>

        <div className="mt-1 space-y-4">
          <div>
            <p className="text-gray-500">Select your City.</p>
            <Select
              onValueChange={(value) => dispatch(updateDeliveryArea(value))}
            >
              <SelectTrigger className="mb-5">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-gray-500">Select Delivery Option</p>
            <Select
              onValueChange={(value) => dispatch(updateDeliveryOption(value))}
            >
              <SelectTrigger className="mb-5">
                <SelectValue placeholder="Select a Options" />
              </SelectTrigger>
              <SelectContent>
                {deliveryOptions.map((dlOp) => (
                  <SelectItem key={dlOp} value={dlOp}>
                    {dlOp}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {isRequiredrescription && (
            <div>
              <p className="text-gray-500">Upload your Prescription.</p>
              <Input type="file" onChange={handlePrescriptionImage} />
            </div>
          )}

          <div>
            <p className="text-gray-500">Delivery Detils Area</p>
            <Textarea
              onChange={(e) => handleShippingChange(e.target.value)}
              rows={5}
            />
          </div>
          <div>
            <p className="mt-8 text-lg font-medium">Payment Methods</p>
            <div className="mt-5 ">
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  defaultChecked
                />
              </div>
              <div className="relative">
                <Input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  defaultChecked={true}
                />
                <span className="peer-checked:border-primary absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-primary peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_2"
                >
                  <img
                    className="w-14 object-contain"
                    src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/09/15/shurjopay_.jpg"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Shurjo Pay</span>
                    <p className="text-slate-500 text-sm leading-6">
                      The Secure Payment Gatway
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

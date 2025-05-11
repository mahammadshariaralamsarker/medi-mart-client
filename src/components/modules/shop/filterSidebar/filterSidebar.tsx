'use client';

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FilterSidebar({
  medicineCat,
}: {
  medicineCat: string[];
}) {
  const [medicinePrice, setMedicinePrice] = useState([0]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-8 p-6 bg-white shadow-lg rounded-lg min-w-full  mb-3  ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push(pathname, { scroll: false })}
          className="text-gray-500 hover:text-gray-700"
        >
          Clear All
        </Button>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Price Range</h3>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>$0</span>
          <span>$500</span>
        </div>
        <Slider
          defaultValue={[0]}
          max={500}
          step={1}
          onValueChange={(value) => {
            setMedicinePrice(value);
            handleSearchQuery("price", value[0]);
          }}
          className="mb-4"
        />
        <p className="text-sm text-gray-600">Selected: ${medicinePrice[0]}</p>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Categories</h3>
        <RadioGroup className="space-y-2">
          {medicineCat?.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <RadioGroupItem
                value={item}
                id={`cat-${idx}`}
                onClick={() => handleSearchQuery("category", item)}
                className="h-5 w-5 text-blue-500 border-gray-300"
              />
              <Label htmlFor={`cat-${idx}`} className="text-gray-700">{item}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Prescription */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Prescription</h3>
        <RadioGroup className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="true"
              id="pres-yes"
              onClick={() => handleSearchQuery("prescriptionRequired", "true")}
              className="h-5 w-5 text-blue-500 border-gray-300"
            />
            <Label htmlFor="pres-yes" className="text-gray-700">Required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="false"
              id="pres-no"
              onClick={() => handleSearchQuery("prescriptionRequired", "false")}
              className="h-5 w-5 text-blue-500 border-gray-300"
            />
            <Label htmlFor="pres-no" className="text-gray-700">Not Required</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

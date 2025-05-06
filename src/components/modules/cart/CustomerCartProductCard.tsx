import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  decreamentMedicineQuantity,
  ICartMedicine,
  increamentMedicineQuantity,
  removeCartMedicine,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
// import { currencyFormatter } from "@/lib/currencyFormatter";

import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function CustomerCartProductCard({
  medicne,
}: {
  medicne: ICartMedicine;
}) {
  const dispatch = useAppDispatch();

  // Handle Order Increament Quantity
  const handleOrderIncreament = (id: string) => {
    dispatch(increamentMedicineQuantity(id));
  };

  // Handle Order Deccreament Quantity
  const handleOrderDecreament = (id: string) => {
    dispatch(decreamentMedicineQuantity(id));
  };

  // Handle Cart Remove
  const handleCartRemove = (id: string) => {
    dispatch(removeCartMedicine(id));
  };
  return (
    <div className="bg-white rounded-lg flex p-5 gap-5">
      <div className="h-full w-32 rounded-md overflow-hidden">
        <Image
          src={medicne?.imageUrl}
          height={200}
          width={200}
          alt="product"
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold">{medicne?.name}</h1>
        <div className="flex gap-5 my-2">
          <p>
            <span className="text-gray-500">Category:</span>
            <span className="font-semibold">{medicne?.category}</span>
          </p>
          <p>
            <span className="text-gray-500">Stock Availability:</span>
            <span className="font-semibold">{medicne?.stock}</span>
          </p>
        </div>
        <hr className="my-1" />
        <div className="flex md:flex-row flex-col items-start md:items-center justify-between">
          <h2>Price: &nbsp; {currencyFormatter(medicne?.price)}</h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 font-semibold md:block hidden">
              Quantity
            </p>
            <Button
              onClick={() => handleOrderDecreament(medicne._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Minus />
            </Button>
            <p className="font-semibold text-xl p-2">
              {medicne?.orderQuantity}
            </p>
            <Button
              onClick={() => {
                if (medicne.stock > medicne.orderQuantity) {
                  handleOrderIncreament(medicne._id);
                }
              }}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Plus />
            </Button>
            <Button
              onClick={() => handleCartRemove(medicne?._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

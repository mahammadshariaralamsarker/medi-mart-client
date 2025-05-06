/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoaderCircle, Trash } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  couponDetailsSelector,
  fetchCoupon,
  subTotalSelector,
} from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";

export default function Coupon() {
  const form = useForm();
  const subtotal = useAppSelector(subTotalSelector);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(couponDetailsSelector);
  const couponInput = form.watch("coupon");

  const handleRemoveCoupon = () => {
    form.reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const modifieCoupondData: any = {
        coupon: data?.coupon,
        totalPrice: subtotal,
      };
      await dispatch(fetchCoupon(modifieCoupondData) as any).unwrap();
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <div className=" border bg-white rounded-md lg:col-span-4  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Use Coupon code</h1>
        <p className="text-gray-500">Enter your coupon code if you have one.</p>

        <Form {...form}>
          <form className="mt-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="coupon"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-full"
                      placeholder="Promo / Coupon code"
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex gap-3 mt-3">
              <Button
                disabled={!couponInput}
                type="submit"
                className="w-full text-xl font-semibold py-5 "
              >
                {isLoading ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Apply"
                )}
              </Button>
              {couponInput && (
                <Button
                  onClick={handleRemoveCoupon}
                  variant="outline"
                  className="bg-red-100 rounded-full size-10"
                >
                  <Trash size={24} className="text-red-500" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

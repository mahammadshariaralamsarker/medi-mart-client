/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CalendarIcon, LoaderCircle, Plus, Trash } from "lucide-react";
import { MMTable } from "@/components/ui/core/MMTable";
import { toast } from "sonner";
import { TCoupon } from "@/types/coupons.types";
import { useState } from "react";
import { MyModal } from "../shared/MyModal/MyModal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


import {
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, formatISO } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { createCoupon, deleteCoupon } from "@/services/CouponServices";
const ManageCoupon = ({ coupons }: { coupons: TCoupon[] }) => {
  const [isOpen, setIsOpen] = useState(false);

   // Delete Coupon
  const handleDelete = async (productId: string) => {
    const toastDeleteId = toast.loading("deleteing");
    const res = await deleteCoupon(productId);
    if (res?.success) {
      toast.success(res?.message, { id: toastDeleteId });
    } else {
      toast.error(res?.error, { id: toastDeleteId });
    }
  };

//    Columm
  const columns: ColumnDef<TCoupon>[] = [
    {
      accessorKey: "code",
      header: "Coupon Code",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <span className="truncate">{row.original.code}</span>
        </div>
      ),
    },
    {
      accessorKey: "discountValue",
      header: "Discount Value",
      cell: ({ row }) => <span>{row.original?.discountValue}</span>,
    },

    {
      accessorKey: "minOrderAmount",
      header: "Min Order Amount",
      cell: ({ row }) => <span>{row.original?.minOrderAmount}</span>,
    },
    {
      accessorKey: "maxDiscountAmount",
      header: "Max Discount Amount",
      cell: ({ row }) => <span>$ {row.original?.maxDiscountAmount}</span>,
    },
    {
      accessorKey: "startDate",
      header: "Start Date",
      cell: ({ row }) => (
        <span>{new Date(row?.original?.startDate).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: "endDate",
      header: "End Date",
      cell: ({ row }) => (
        <span>{new Date(row?.original?.endDate).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  // Form Handle
  const form = useForm({
    defaultValues: {
      code: "",
      discountValue: "",
      minOrderAmount: "",
      maxOrderAmount: "",
      maxDiscountAmount: "",
      startDate: new Date(),
      endDate: new Date(),
    },
  });
  const {
    formState: { isSubmitting },
  } = form;

  // Handle Submit Product Add Form
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    const createToastId = toast.loading("createingToast");
    try {
     
      // Modefied Data
      const modifiedData = {
        ...data,
        discountValue: Number(data?.discountValue),
        minOrderAmount: Number(data?.minOrderAmount),
        maxOrderAmount: Number(data?.maxOrderAmount),
        maxDiscountAmount: Number(data?.maxDiscountAmount),
        startDate: formatISO(data?.startDate),
        endDate: formatISO(data?.startDate),
      };

      const res = await createCoupon(modifiedData);
      if (res?.success) {
        toast.success(res?.message, { id: createToastId });
        form.reset()
      } else {
        toast.error(res?.error, { id: createToastId });
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return (
    <div>
      <MyModal
        isOpen={isOpen}
        modalTitle="Create Coupon"
        onClose={() => setIsOpen(false)}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Coupon Code</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="discountValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount Value</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="minOrderAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Min Order Amount</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxOrderAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Order Amount</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxDiscountAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Discount Amount</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full h-10 pl-3 text-left font-normal rounded-md",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0 " align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date.getTime() < new Date().setHours(0, 0, 0, 0)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full h-10 pl-3 text-left font-normal rounded-md",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0 " align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date.getTime() < new Date().setHours(0, 0, 0, 0)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              {isSubmitting ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Create"
              )}
            </Button>
          </form>
        </Form>
      </MyModal>
      <div className="flex items-center justify-between py-5">
        <h1 className="text-xl font-bold">Manage Coupons</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsOpen(true)} size="sm">
            Add Product <Plus />
          </Button>
        </div>
      </div>
      <MMTable columns={columns} data={coupons || []} />
      {/* <TablePagination totalPage={meta?.totalPage} /> */}
    </div>
  );
};

export default ManageCoupon;

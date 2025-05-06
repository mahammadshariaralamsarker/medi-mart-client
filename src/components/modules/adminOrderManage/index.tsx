/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { MMTable } from '@/components/ui/core/MMTable';
import { TOrderInfo } from '@/types/order.types';
import { ColumnDef } from '@tanstack/react-table';
import { Eye, Trash } from 'lucide-react';
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { deleteSingleOrderForAdmin, updateSingleOrderCheckingStatusForAdmin, updateSingleOrderDeliveryStatusForAdmin } from '@/services/OrderServices';
import { toast } from 'sonner';

const AdminOrderManage = ({ allOrders }: { allOrders:TOrderInfo[] }) => {
  const router = useRouter();
  const handleReview = async (id: string, value: string) => {
    const updatingStatusId = toast.loading("Updating Status...");
    const checkingData = { status: value };
    const res = await updateSingleOrderCheckingStatusForAdmin(id, checkingData);
    if (res.success) {
      toast.success(res?.message, { id: updatingStatusId });
    } else {
      toast.error("Something Went Wrong", { id: updatingStatusId });
    }
  };

  // Handle Delivery Status
  const handledeliveryStatus = async (
    orderId: string,
    deliveryStatus: string
  ) => {
    const updatingStatusId = toast.loading("Updating Status...");
    const checkingData = { status: deliveryStatus };
    const res = await updateSingleOrderDeliveryStatusForAdmin(
      orderId,
      checkingData
    );
    if (res.success) {
      toast.success(res?.message, { id: updatingStatusId });
    } else {
      toast.error("Something Went Wrong", { id: updatingStatusId });
    }
  };

  // Handle Delete Single Order 
  const handledeDeleteOrder = async (
    orderId: string,
  ) => {
    const updatingStatusId = toast.loading("Deleting Order...");
    const res = await deleteSingleOrderForAdmin(
      orderId,
    );
    if (res.success) {
      toast.success(res?.message, { id: updatingStatusId });
    } else {
      toast.error("Something Went Wrong", { id: updatingStatusId });
    }
  };
  const columns: ColumnDef<TOrderInfo>[] = [
    {
      accessorKey: "medicines",
      header: "Medicine Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <span className="truncate">
            {row.original.medicines[0]?.medicine?.name?.slice(0, 10)}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "totalPrice",
      header: "Total Price",
      cell: ({ row }) => <span>{row.original.totalPrice}</span>,
    },

    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => (
        <span
          className={cn(
            "py-[2px] px-2 rounded text-sm ",
            row.original.paymentStatus === "Paid" && "bg-primary text-white",
            row.original.paymentStatus === "Pending" &&
              "bg-yellow-500 text-black",
            row.original.paymentStatus === "Failed" && "bg-rose-600 text-white"
          )}
        >
          {row.original.paymentStatus}
        </span>
      ),
    },
    {
      accessorKey: "isCheck",
      header: "Order Check Status",
      cell: ({ row }) => (
        <span>
          <Select
            onValueChange={(value) => handleReview(row?.original?._id, value)}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue className="" placeholder={row.original.isCheck} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Accepted">Accepted</SelectItem>
              <SelectItem value="Deny">Deny</SelectItem>
              <SelectItem value="In-Review">In-Review</SelectItem>
            </SelectContent>
          </Select>
        </span>
      ),
    },
    {
      accessorKey: "orderStatus",
      header: "Delivery Status",
      cell: ({ row }) => (
        <span>
          <Select
            onValueChange={(value) =>
              handledeliveryStatus(row?.original?._id, value)
            }
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue
                className=""
                placeholder={row.original.orderStatus}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Processing">Processing</SelectItem>
              <SelectItem value="Shipped">Shipped</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-green-500"
            title="view"
            onClick={() => router.push(`/admin/orders/${row?.original?._id}`)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handledeDeleteOrder(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        <div className="flex items-center justify-between py-5">
          <h1 className="text-xl font-bold">Manage Order</h1>
        </div>
        <MMTable columns={columns} data={allOrders || []} />
      </div>
    </>
  );
};

export default AdminOrderManage

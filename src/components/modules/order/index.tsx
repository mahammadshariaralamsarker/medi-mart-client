"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MMTable } from "@/components/ui/core/MMTable";
import { TOrderInfo } from "@/types/order.types";
import { Button } from "@/components/ui/button";
import { MyModal } from "../shared/MyModal/MyModal";
import { useState } from "react";
import { currencyFormatter } from "@/lib/currencyFormatter";
import Stepper from "./stepper/Stepper";
import { cn } from "@/lib/utils";

const ManageOrders = ({ myOrders }: { myOrders: TOrderInfo[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const columns: ColumnDef<TOrderInfo>[] = [
    {
      accessorKey: "medicines",
      header: "Medicine Name",
      cell: ({ row }) => {
        return (
          <div className="flex items-center space-x-3">
            <span className="truncate">
              {row.original.medicines[0].medicine?.name?.slice(0, 10)}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "totalPrice",
      header: "Total Price",
      cell: ({ row }) => (
        <span>{currencyFormatter(row.original.totalPrice)}</span>
      ),
    },

    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => (
        <span
          className={cn(
            " py-[2px] px-1 text-xs rounded",
            row.original.paymentStatus === "Pending" && "bg-yellow-400",
            row.original.paymentStatus === "Paid" && "bg-primary text-white",
            row.original.paymentStatus === "Failed" && "bg-rose-600"
          )}
        >
          {row.original.paymentStatus}
        </span>
      ),
    },
    {
      accessorKey: "isCheck",
      header: "Check Status",
      cell: ({ row }) => (
        <span
          className={cn(
            " py-[2px] px-1 text-xs rounded",
            row.original.isCheck === "In-Review" && "bg-yellow-400",
            row.original.isCheck === "Accepted" && "bg-primary text-white",
            row.original.isCheck === "Deny" && "bg-rose-600"
          )}
        >
          {row.original.isCheck}
        </span>
      ),
    },
    {
      accessorKey: "orderStatus",
      header: "Action",
      cell: ({ row }) => {
        return (
          <>
            <MyModal
              modalTitle="Your Order Status is...."
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <Stepper status={row.original?.orderStatus} />
            </MyModal>
            <span>
              <Button size="sm" onClick={() => setIsOpen(true)}>
                Track Order
              </Button>
            </span>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <h1 className="text-xl font-bold">Your Orders</h1>
      </div>
      <MMTable columns={columns} data={myOrders || []} />
      {/* <TablePagination totalPage={meta?.totalPage} /> */}
    </div>
  );
};

export default ManageOrders;

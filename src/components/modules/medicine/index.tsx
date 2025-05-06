"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MMTable } from "@/components/ui/core/MMTable";
import { TMedicine } from "@/types/medicines.types";
import { deleteMedicine } from "@/services/Medicine";
import { toast } from "sonner";

const ManageMedicines = ({
  medicines,
}: {
  medicines: TMedicine[];

}) => {
  const router = useRouter();
 
  
  const handleDelete = async (productId: string) => {
    const toastDeleteId = toast.loading("deleteing");
    const res = await deleteMedicine(productId)
     if (res?.success) {
       toast.success(res?.message, { id: toastDeleteId });
       router.push("/admin/medicines");
     } else {
       toast.error(res?.error, { id: toastDeleteId });
     }
  };

  const columns: ColumnDef<TMedicine>[] = [
    {
      accessorKey: "name",
      header: "Medicine Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.imageUrl}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.category}</span>,
    },

    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => <span>{row.original.stock}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>$ {row.original.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "expiryDate",
      header: "Expired Date",
      cell: ({ row }) => (
        <span>{new Date(row?.original?.expiryDate).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/admin/medicines/update/${row.original._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>

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

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <h1 className="text-xl font-bold">Manage Products</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/admin/medicines/create")}
            size="sm"
          >
            Add Product <Plus />
          </Button>
        </div>
      </div>
      <MMTable columns={columns} data={medicines || []} />
      {/* <TablePagination totalPage={meta?.totalPage} /> */}
    </div>
  );
};

export default ManageMedicines;

"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MMTable } from "@/components/ui/core/MMTable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TLoggedInUser } from "@/types/user.types";
import { useRouter } from "next/navigation";

const UserManage = ({ allUsers }: { allUsers: TLoggedInUser[] }) => {
  const router = useRouter()
  const columns: ColumnDef<TLoggedInUser>[] = [
    {
      accessorKey: "name",
      header: "User Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "User Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },

    {
      accessorKey: "status",
      header: "Account Status",
      cell: ({ row }) => (
        <span
          className={cn(
            " py-[2px] px-1 text-xs rounded capitalize",
            row.original.status === "active" && "bg-primary text-white",
            row.original.status === "deactivate" && "bg-rose-600 text-white"
          )}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "isCheck",
      header: "Order Details",
      cell: ({ row }) => (
        <span
          className=''
        >
         <Button onClick={()=> router.push(`/admin/users/${row?.original?._id}`)} size='sm'>See Details</Button>
        </span>
      ),
    },
    
  ];
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <h1 className="text-xl font-bold">Users List</h1>
      </div>
      <MMTable columns={columns} data={allUsers || []} />
    </div>
  );
};

export default UserManage;

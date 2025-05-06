'use client'
import { Button } from '@/components/ui/button';
import { updateSingleOrderCheckingStatusForAdmin } from '@/services/OrderServices';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const CheckingActions = ({ id }: { id:string}) => {
  const router = useRouter()
  // Handle Review Checking
  const handleReviewChecking = async (value:string) => {
    const updatingStatusId = toast.loading("Updating Status...");
    const checkingData = { status: value };
    const res = await updateSingleOrderCheckingStatusForAdmin(id, checkingData);
    if (res.success) {
      toast.success(res?.message, { id: updatingStatusId });
      router.push("/admin/orders");
    } else {
      toast.error("Something Went Wrong", { id: updatingStatusId });
    }
  };
  return (
    <>
      <Button onClick={() => handleReviewChecking("Accepted")}>
        Accept Order
      </Button>
      <Button
        onClick={() => handleReviewChecking("Deny")}
        variant="destructive"
      >
        Deny Order
      </Button>
    </>
  );
};

export default CheckingActions

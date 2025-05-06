/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
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

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

import uploadImage from "@/utils/uploadImageToCloudinary";
import { TLoggedInUser } from "@/types/user.types";
import { updateUserInfo } from "@/services/AuthServices";
const ProfileUpdateModal = ({ userInfo }: { userInfo: TLoggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      name: userInfo?.name || "",
      email: userInfo?.email || "",
      phone: userInfo?.phone || "",
      city: userInfo?.city || "",
      address: userInfo?.address || "",
      imageUrl: userInfo?.image || null,
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const createToastId = toast.loading("createing Medicine...");
    try {
      let userImage = userInfo.image;
      if (data?.imageUrl) {
        userImage = await uploadImage(data?.imageUrl);
      }

      // Modefied Data
      const modifiedData = {
        ...data,
        image: userImage,
      };

      const res = await updateUserInfo(modifiedData);
      if (res?.success) {
        toast.success(res?.message, { id: createToastId });
        setIsOpen(false);
      } else {
        toast.error(res?.error, { id: createToastId });
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return (
    <>
      <MyModal
        isOpen={isOpen}
        modalTitle="Update User Profile"
        onClose={() => setIsOpen(false)}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-1  gap-2 lg:gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Email</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        {...field}
                        onChange={(e) => onChange(e.target.files?.[0])}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full mt-2">
              {isSubmitting ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Update"
              )}
            </Button>
          </form>
        </Form>
      </MyModal>
      <div className="text-center mt-1">
        <Button onClick={() => setIsOpen(true)} size="sm">
          Edit Profile
        </Button>
      </div>
    </>
  );
};

export default ProfileUpdateModal;

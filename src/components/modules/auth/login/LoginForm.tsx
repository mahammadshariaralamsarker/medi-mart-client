"use client";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "./loginValidationSchema";
import { userLogin } from "@/services/AuthServices";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/UserContext";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const { setIsLoading } = useUser();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
  });
  const {
    formState: { isSubmitting },
  } = form;

  // Register Form Handle
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      // Form Data Send to Server action
      const res = await userLogin(data);
      setIsLoading(true);
      // Toast Handle
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-white border p-7 md:p-10 rounded">
        <div className="flex gap-2 border-b pb-3 mb-6">
          {/* <ShopZenLogo /> */}
          <div className="space-y-1">
            <h2 className="font-bold text-lg md:text-2xl">Medi Mart</h2>
            <p className="text-xs">Welcome Back!</p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Phone</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2">
              {isSubmitting ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Login"
              )}
            </Button>
            <p className="mt-2 text-center text-sm">
              Do not have any account?{" "}
              <Link href="/register" className="font-bold hover:underline">
                Register
              </Link>
            </p>
          </form>
          <div className="flex justify-between items-center mt-5">
          <div className="mt-5  text-sm">
              <h1 className="underline">User</h1>
              <h1> Email: customer@gmail.com</h1>
              <p>Password: 12345678</p>
            </div>
            <div className="mt-5  text-sm">
              <h1 className="underline">Admin</h1>
              <h1> Email: admin@gmail.com</h1>
              <p>Password: 12345678</p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

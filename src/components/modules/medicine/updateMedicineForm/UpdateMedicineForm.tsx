/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CalendarIcon, LoaderCircle, PlusIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, formatISO } from "date-fns";
import { cn } from "@/lib/utils";
import uploadImage from "@/utils/uploadImageToCloudinary";
import { createMedicine, updateMedicine } from "@/services/Medicine";
import { TMedicine } from "@/types/medicines.types";
import { useRouter } from "next/navigation";
const UpdateMedicineForm = ({
  singleMedicine,
}: {
  singleMedicine: TMedicine;
}) => {
  const form = useForm({
    defaultValues: {
      name: singleMedicine?.name || "",
      description: singleMedicine?.description || "",
      price: singleMedicine?.price || "",
      stock: singleMedicine?.stock || "",
      prescriptionRequired: singleMedicine?.prescriptionRequired ? 'yes' : 'no',
      manufacturer: singleMedicine?.manufacturer || "",
      category: singleMedicine?.category || "",
      symptoms: singleMedicine?.symptoms?.map((symptom) => ({
        value: symptom,
      })) || [{ value: "" }],
      expiryDate: new Date(),
      imageUrl: singleMedicine?.imageUrl || null,
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
const router = useRouter()
  // DynamicKey symptoms Fields Add
  const { append: keySymptomsAppend, fields: keySymptomsField } = useFieldArray(
    {
      control: form.control,
      name: "symptoms",
    }
  );
  // Set Ke Symptoms Value
  const addSymptoms = () => {
    keySymptomsAppend({ value: "" });
  };

  // Handle Submit Product Add Form
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
        let imageLink = singleMedicine?.imageUrl;
        if (data?.imageUrl){
            const resimagUrl = await uploadImage(data?.imageUrl);
            imageLink = resimagUrl;
        }
      // Modify Key Features
      const symptoms = data?.symptoms?.map(
        (symptomsData: { value: string }) => symptomsData.value
      );

      // Modefied Data
      const modifiedData = {
        ...data,
        price: parseFloat(data?.price),
        imageUrl: imageLink,
        stock: parseInt(data?.stock),
        symptoms: symptoms,
        prescriptionRequired:
          data?.prescriptionRequired === "yes" ? true : false,
        expiryDate: formatISO(data?.expiryDate),
      };

      const res = await updateMedicine(modifiedData, singleMedicine?._id);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/admin/medicines");
      } else {
        toast.error(res?.error);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return (
    <div>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="max-w-4xl w-full bg-white border p-7 md:p-10 rounded my-4">
          <div className="flex gap-2 border-b pb-3 mb-6">
            <div className="space-y-1">
              <h2 className="font-bold text-lg md:text-2xl">Update Medicine</h2>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Medicine Name</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Medicine Price</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stock</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="prescriptionRequired"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prescription Required</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Value" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="manufacturer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Manufacturer</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Expired Date</FormLabel>
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

                {/* Key Features */}
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">Symptoms</p>
                    <Button
                      onClick={addSymptoms}
                      variant="outline"
                      className="size-8"
                      type="button"
                    >
                      <PlusIcon />
                    </Button>
                  </div>
                  <div>
                    {keySymptomsField?.map((item, idx) => (
                      <div key={item?.id}>
                        <FormField
                          control={form.control}
                          name={`symptoms.${idx}.value`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Symptoms {idx + 1}</FormLabel>
                              <FormControl>
                                <Input {...field} value={field.value || ""} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} value={field.value || ""} />
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

              {/* {imagePreview?.length > 0 && (
                <div className="mt-4">
                  <SHImagePreview
                    setImageFiels={setImageFiels}
                    imagePreview={imagePreview}
                    setImagePreview={setImagePreview}
                    className="flex justify-center"
                  />
                </div>
              )}
              {imagePreview.length < 3 ? (
                <div className="mt-4">
                  <SZImageUpload
                    imageFiels={imageFiels}
                    setImageFiels={setImageFiels}
                    imagePreview={imagePreview}
                    setImagePreview={setImagePreview}
                    imageFileLabel="Upload Logo"
                  />
                </div>
              ) : (
                ""
              )} */}
              <Button type="submit" className="w-full mt-2">
                {isSubmitting ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Update"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMedicineForm;

import { CheckCircle, Loader, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, name: "Pending", description: "Your order is being checked." },
  { id: 2, name: "Processing", description: "Your order is being prepared." },
  { id: 3, name: "Shipped", description: "Your order is on the way." },
  { id: 4, name: "Delivered", description: "Your order has been delivered." },
];

const getStepFromStatus = (status: string) => {
  switch (status) {
    case "Pending":
      return 1;
    case "Processing":
      return 2;
    case "Shipped":
      return 3;
    case "Delivered":
      return 4;
    default:
      return 1;
  }
};

export default function Stepper({ status }: { status: string }) {
  const currentStep = getStepFromStatus(status);

  return (
    <div className="flex flex-col items-start space-y-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col space-y-1">
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-full border-2",
                index + 1 < currentStep
                  ? "border-[#16a34a] text-[#16a34a]"
                  : index + 1 === currentStep
                  ? "border-[#16a34a] text-[#16a34a] animate-pulse"
                  : "border-gray-300 text-gray-400"
              )}
            >
              {index + 1 < currentStep ? (
                <CheckCircle className="w-5 h-5" />
              ) : index + 1 === currentStep && status === "Processing" ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : index + 1 === currentStep && status === "Shipped" ? (
                <Truck className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>
            <span
              className={cn(
                "text-sm font-medium",
                index + 1 < currentStep
                  ? "text-[#16a34a]"
                  : index + 1 === currentStep
                  ? "text-[#16a34a]"
                  : "text-gray-400"
              )}
            >
              {step.name}
            </span>
          </div>
          <span
            className={cn(
              "text-xs ml-12",
              index + 1 < currentStep
                ? "text-[#16a34a]"
                : index + 1 === currentStep
                ? "text-[#16a34a]"
                : "text-gray-400"
            )}
          >
            {step.description}
          </span>
        </div>
      ))}
    </div>
  );
}

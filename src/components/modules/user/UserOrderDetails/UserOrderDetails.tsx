import { currencyFormatter } from "@/lib/currencyFormatter";
import { cn } from "@/lib/utils";
import { TOrderUserOrderHistory } from "@/types/order.types";

const UserOrderDetails = ({
  userOrderHistory,
}: {
  userOrderHistory: TOrderUserOrderHistory[]
}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Medicines Name
              </th>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Delivery Area
              </th>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Delivery Option
              </th>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Total Price
              </th>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Payment Status
              </th>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Delivery Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {userOrderHistory?.map((item) => (
              <tr key={item?._id}>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  {item?.medicines?.map((order, idx) => (
                    <span key={idx}>
                      {idx + 1}.{order?.medicine?.name}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {item?.deliveryArea}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {item?.deliveryOption}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {currencyFormatter(item?.totalPrice)}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={cn(
                      " text-sm py-[2px] px-2 rounded",
                      item?.paymentStatus === "Paid" && "bg-primary text-white",
                      item?.paymentStatus === "Pending" &&
                        "bg-yellow-600 text-black",
                      item?.paymentStatus === "Cancelled" &&
                        "bg-rose-600 text-white"
                    )}
                  >
                    {item?.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={cn(
                      " text-sm py-[2px] px-2 rounded",
                      item?.orderStatus === "Delivered" &&
                        "bg-primary text-white",
                      item?.orderStatus === "Pending" &&
                        "bg-yellow-600 text-black",
                      item?.orderStatus === "Processing" &&
                        "bg-blue-600 text-white",
                      item?.orderStatus === "Shipped" &&
                        "bg-yellow-700 text-white"
                    )}
                  >
                    {item?.orderStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrderDetails

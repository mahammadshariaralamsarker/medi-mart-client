
import { currencyFormatter } from '@/lib/currencyFormatter';
import { TOrderInfo } from '@/types/order.types';
import Image from 'next/image';
import React from 'react'
import CheckingActions from './checkingActions/CheckingActions';

const ViewSingleMedicine = ({
  singleMedicine,
}: {
  singleMedicine: TOrderInfo;
}) => {

  return (
    <div>
      <div className="flow-root">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Medicines Names</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {singleMedicine?.medicines?.map((item, idx) => (
                <span key={idx}>
                  {idx + 1}. {item?.medicine?.name} ({item?.quantity}) -
                  Prescription -
                  {item?.medicine?.prescriptionRequired === true ? (
                    <span className="bg-primary text-white text-sm py-[1px] px-2 rounded">
                      Yes
                    </span>
                  ) : (
                    <span className="bg-rose-600 text-white text-sm py-[1px] px-2 rounded">
                      No
                    </span>
                  )}
                </span>
              ))}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Total Price</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {currencyFormatter(singleMedicine?.totalPrice)}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Discount Price</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {currencyFormatter(singleMedicine?.discount)}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Delivery Charge</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {currencyFormatter(singleMedicine?.deliveryCharge || 0)}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">City</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {singleMedicine?.deliveryArea}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Details Address</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {singleMedicine?.deliveryDetailsAddress}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Occupation</dt>
            <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Prescriptions</dt>
           
            <dd className="text-gray-700 flex gap-2">
              {singleMedicine?.medicines?.map((item, idx) => (
                <div key={idx}>
                  {item?.prescriptionUrl ? (
                    <span className="">
                      {idx + 1}. {item?.medicine?.name}
                      <Image
                        width={400}
                        height={400}
                        className="max-w-40"
                        src={item?.prescriptionUrl}
                        alt="Medicine"
                      />
                    </span>
                  ) : (
                    <span>None</span>
                  )}
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </div>
      <div className="text-center space-x-4">
       <CheckingActions id={singleMedicine?._id}/>
      </div>
    </div>
  );
};

export default ViewSingleMedicine

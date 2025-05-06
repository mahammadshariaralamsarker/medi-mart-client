import CheckoutManage from '@/components/modules/checkout'
import PaymentDetails from '@/components/modules/checkout/paymentDetails/PaymentDetails';
import ShippingDetails from '@/components/modules/checkout/shippingDetails/ShippingDetails';
import React from 'react'

const CheckoutPage = () => {
  return (
    <div className='max-w-5xl mx-auto mt-16'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
            <ShippingDetails/>
        </div>
        <div className="md:col-span-5 space-y-2">
          <CheckoutManage />
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage

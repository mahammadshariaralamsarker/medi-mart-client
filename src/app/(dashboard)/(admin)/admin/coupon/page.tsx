import ManageCoupon from '@/components/modules/coupon'
import { getAllCoupons } from '@/services/CouponServices'
import React from 'react'

const CouponPage = async() => {
    const {data:couponsData} = await getAllCoupons()
  return (
    <div>
      <ManageCoupon coupons={couponsData} />
    </div>
  );
}

export default CouponPage

import { Action, Dispatch, Store } from "@reduxjs/toolkit"
import { addToCart, decreamentMedicineQuantity, fetchCoupon, increamentMedicineQuantity, removeCartMedicine, subTotalSelector } from "../features/cart/cartSlice"
import { RootState } from "../store"
import { TDiscountData } from "@/types/coupons.types"

export const couponMiddleware = (store:Store)=>(next:Dispatch)=>(action:Action)=>{
    if(action.type === addToCart.type || action.type === increamentMedicineQuantity.type || action.type === decreamentMedicineQuantity.type || action.type === removeCartMedicine.type){
        next(action)
        const state:RootState = store.getState()
        const subtotal = subTotalSelector(state);
        const modefiedData:TDiscountData = {
          coupon:state?.cart.coupon.code,
          totalPrice: subtotal,
        };
        store.dispatch(fetchCoupon(modefiedData) as unknown as Action);
    }else{

        next(action)
    }
}
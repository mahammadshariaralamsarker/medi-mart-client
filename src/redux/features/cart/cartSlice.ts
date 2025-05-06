/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/redux/store";
import { getDiscountInfo } from "@/services/CouponServices";
import { TDiscountData } from "@/types/coupons.types";
import { TMedicine } from "@/types/medicines.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ICartMedicine extends TMedicine {
  orderQuantity: number;
}
interface IInitialState {
  medicines: ICartMedicine[];
  isPrescriptionRequired: boolean;
  deliveryOption: string;
  deliveryArea: string;
  deliveryDetailsAddress: string;
  prescriptionUrl: string | null;
  coupon: {
    code: string;
    discount: number;
    finalPrice: number;
    isLoading: boolean;
    error: string;
  };
}
const initialState: IInitialState = {
  medicines: [],
  isPrescriptionRequired: false,
  deliveryOption: "",
  deliveryArea: "",
  deliveryDetailsAddress: "",
  prescriptionUrl: null,
  coupon: {
    code: "",
    discount: 0,
    finalPrice: 0,
    isLoading: false,
    error: "",
  },
};

// Create Async Thunk
export const fetchCoupon = createAsyncThunk(
  "cart/fetchCoupon",
  async (couponInfo: TDiscountData) => {
    try {
      const res = await getDiscountInfo(couponInfo);
      // Check Error
      if (!res?.success) {
        throw new Error(res?.message);
      }
      return res;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add To Cart
    addToCart: (state, action) => {
      if (action.payload?.prescriptionRequired) {
        state.isPrescriptionRequired = true;
      }
      // Check Medicien Exist or Not
      const isExistMedicine = state.medicines?.find(
        (medicine) => medicine?._id === action.payload._id
      );
      if (isExistMedicine) {
        isExistMedicine.orderQuantity += 1;
        return;
      }

      state.medicines.push({ ...action.payload, orderQuantity: 1 });
    },
    //  Increament Medicine Order Quantity
    increamentMedicineQuantity: (state, action) => {
      const increamentQuantity = state.medicines.find(
        (medicine) => medicine?._id === action.payload
      );
      if (increamentQuantity) {
        increamentQuantity.orderQuantity += 1;
        return;
      }
    },
    //  decreament Medicine Order Quantity
    decreamentMedicineQuantity: (state, action) => {
      const decreamentQuantity = state.medicines.find(
        (medicine) => medicine?._id === action.payload
      );
      if (decreamentQuantity && decreamentQuantity.orderQuantity > 1) {
        decreamentQuantity.orderQuantity -= 1;
        return;
      }
    },

    // Handle Remove Medicine
    removeCartMedicine: (state, action) => {
      state.medicines = state.medicines.filter(
        (medicine) => medicine?._id !== action.payload
      );
      const isCheckPrescriptionMedicine = state.medicines?.find(
        (mdc) => mdc.prescriptionRequired === true
      );
      if (!isCheckPrescriptionMedicine) {
        state.isPrescriptionRequired = false;
      }
    },
    // Update Delivery Option
    updateDeliveryOption: (state, action) => {
      state.deliveryOption = action.payload;
    },
    // Update Delivery Area
    updateDeliveryArea: (state, action) => {
      state.deliveryArea = action.payload;
    },
    // Update Delivery Details Address
    updateDeliveryDetailsAddress: (state, action) => {
      state.deliveryDetailsAddress = action.payload;
    },
    // Update Prescription Url
    updatePrescriptionUrl: (state, action) => {
      state.prescriptionUrl = action.payload;
    },

    // Clear Cart
    cartClear: (state) => {
      state.medicines = [];
      state.isPrescriptionRequired = false;
      state.deliveryOption = "";
      state.deliveryArea = "";
      state.deliveryDetailsAddress = "";
      state.prescriptionUrl = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoupon.pending, (state) => {
      state.coupon.error = "";
      state.coupon.isLoading = true;
    });
    builder.addCase(fetchCoupon.rejected, (state, action) => {
      state.coupon.error = action.error.message as string;
      state.coupon.isLoading = false;
      state.coupon.discount = 0;
      state.coupon.finalPrice = 0;
      state.coupon.code = "";
    });
    builder.addCase(fetchCoupon.fulfilled, (state, action) => {
      state.coupon.error = "";
      state.coupon.isLoading = false;
      state.coupon.discount = action?.payload?.data?.discount;
      state.coupon.finalPrice = action?.payload?.data?.finalPrice;
      state.coupon.code = action?.payload?.data?.code;
    });
  },
});

// Selectors Functions Here
export const cartMedicineSelector = (state: RootState) => {
  return state.cart.medicines;
};
export const subTotalSelector = (state: RootState) => {
  return state.cart.medicines?.reduce((acc, medicine) => {
    return acc + medicine.price * medicine?.orderQuantity;
  }, 0);
};

export const discountAmountSelector = (state: RootState) => {
  return state.cart.coupon.discount;
};
export const couponDetailsSelector = (state: RootState) => {
  return state.cart.coupon;
};
export const deliveryOptionSelector = (state: RootState) => {
  return state.cart.deliveryOption;
};
export const deliveryAreaSelector = (state: RootState) => {
  return state.cart.deliveryArea;
};
export const deliveryAddressDetailsSelector = (state: RootState) => {
  return state.cart.deliveryDetailsAddress;
};
export const prescriptionUrlSelector = (state: RootState) => {
  return state.cart.prescriptionUrl;
};
export const isPrescritionRequiredSelector = (state: RootState) => {
  return state.cart.isPrescriptionRequired;
};

export const orderSelector = (state: RootState) => {
  const prescriptionUrl = state.cart.prescriptionUrl;
  return {
    medicines: state.cart.medicines.map((medicine) => ({
      medicine: medicine?._id,
      quantity: medicine?.orderQuantity,
      prescriptionUrl: medicine?.prescriptionRequired ? prescriptionUrl : null,
    })),
    deliveryOption: state.cart.deliveryOption,
    deliveryArea: state.cart.deliveryArea,
    deliveryDetailsAddress: state.cart.deliveryDetailsAddress,
  };
};

// Grand Total Selector
export const grandTotalSelector = (state: RootState) => {
  const subTotal = subTotalSelector(state);
  const shipmentCost = shippingCostSelector(state);
  const discountAmount = discountAmountSelector(state);
  const shipmentTotalAmount = shipmentCost || 0;
  return subTotal - discountAmount + shipmentTotalAmount;
};

// Shiping Cost Selector
export const shippingCostSelector = (state: RootState) => {
  if (
    state.cart.deliveryOption &&
    state.cart.deliveryOption === "Store-Pickup" &&
    state.cart.medicines?.length > 0
  ) {
    return 0;
  } else if (
    state.cart.deliveryOption &&
    state.cart.deliveryOption === "Express-Delivery" &&
    state.cart.medicines?.length > 0
  ) {
    if (
      state.cart.deliveryArea &&
      state.cart.deliveryArea === "Dhaka" &&
      state.cart.medicines?.length > 0
    ) {
      return 160;
    } else if (
      state.cart.deliveryArea &&
      state.cart.deliveryArea !== "Dhaka" &&
      state.cart.medicines?.length > 0
    ) {
      return 320;
    }
  } else if (
    state.cart.deliveryArea &&
    state.cart.deliveryArea === "Dhaka" &&
    state.cart.medicines?.length > 0
  ) {
    return 60;
  } else if (
    state.cart.deliveryArea &&
    state.cart.deliveryArea !== "Dhaka" &&
    state.cart.medicines?.length > 0
  ) {
    return 120;
  } else {
    return 0;
  }
};
// Export Actions
export const {
  addToCart,
  increamentMedicineQuantity,
  decreamentMedicineQuantity,
  removeCartMedicine,
  updateDeliveryArea,
  updateDeliveryDetailsAddress,
  updateDeliveryOption,
  updatePrescriptionUrl,
  cartClear,
} = cartSlice.actions;

// Export Reducer
export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationDetailsState {
  reservation_id: string;
  pickupDate: Date;
  returnDate: Date;
  discount: string;
  duration: {
    weeks: number;
    days: number;
    hours: number;
  };
}

const reservationDetailsSlice = createSlice({
  name: "reservation_details",
  initialState: {
    reservation_id: "",
    pickupDate: new Date(),
    returnDate: new Date(),
    discount: "",
    duration: {
      weeks: 0,
      days: 0,
      hours: 0,
    },
  } as ReservationDetailsState,
  reducers: {
    updateReservationId(state, action: PayloadAction<string>) {
      state.reservation_id = action.payload;
    },
    updatePickupDate(state, action: PayloadAction<Date>) {
      state.pickupDate = action.payload;
    },
    updateReturnDate(state, action: PayloadAction<Date>) {
      state.returnDate = action.payload;
    },
    updateDiscount(state, action: PayloadAction<string>) {
      state.discount = action.payload;
    },
    updateDuration(
      state,
      action: PayloadAction<{ weeks: number; days: number; hours: number }>
    ) {
      state.duration = action.payload;
    },
  },
});

export const {
  updateReservationId,
  updatePickupDate,
  updateReturnDate,
  updateDiscount,
  updateDuration,
} = reservationDetailsSlice.actions;

export default reservationDetailsSlice.reducer;

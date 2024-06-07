import { IReservation } from "@/types";
import { ICar } from "@/types/car";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservation: null as IReservation | null,
  },
  reducers: {
    setReservation(state, action: PayloadAction<IReservation>) {
      state.reservation = action.payload;
    },
  },
});

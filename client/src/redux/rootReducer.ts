import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import customerReducer from "./reducers/customerReducer";
import reservationDetailsReducer from "./reducers/reservationDetailsReducer";


export const rootReducer = combineReducers({
    customer: customerReducer,
    reservationDetails: reservationDetailsReducer,
    // reservation: reservationReducer,
    // car: carReducer,
    base: baseApi.reducer,


});

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,

};
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  } as CustomerState,
  reducers: {
    updateField: (state, action: PayloadAction<{ name: keyof CustomerState; value: string }>) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateField } = customerSlice.actions;
export default customerSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    setCart: (state, action) => action.payload,
    removeItem: (state, action) => state.filter((_, i) => i !== action.payload),
  },
});

export const { setCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export type ProductState = {
  isLoading: boolean;
  products: [];
  error: Error | null;
};

const initialState: ProductState = {
  isLoading: false,
  products: [],
  error: null,
};

const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    GET_PRODUCTS: (state) => ({ ...state, isLoading: true }),
    GET_PRODUCTS_SUCCESS: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      products: data,
    }),
    GET_PRODUCTS_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.error,
    }),
  },
});

const { actions, reducer } = counterSlice;

export const {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} = actions;

export default reducer;

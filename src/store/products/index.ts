import api from "services/api";
import create from "zustand";
import { devtools } from "zustand/middleware";

type ProductState = {
  products: [];
  isLoading: boolean;
  getProducts: () => Promise<void>;
};

export const useProductStore = create<ProductState>(
  devtools((set) => ({
    products: [],
    isLoading: false,
    getProducts: async () => {
      set({ isLoading: true });
      const { data } = await api.get("/products");
      set({ isLoading: false, products: data });
    },
  }))
);

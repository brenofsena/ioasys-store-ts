import api from "services/api";
import { atom } from "jotai";

type ProductState = {
  products: [];
  isLoading: boolean;
};

const productAtom = atom<ProductState>({
  products: [],
  isLoading: false,
});

export const fetchProductAtom = atom(
  (get) => get(productAtom),
  async (_get, set) => {
    set(productAtom, { ..._get(productAtom), isLoading: true });
    const { data } = await api.get("/products");
    set(productAtom, {
      ..._get(productAtom),
      products: data,
      isLoading: false,
    });
  }
);

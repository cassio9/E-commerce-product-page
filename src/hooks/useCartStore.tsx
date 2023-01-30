import { create } from "zustand";

interface ProductState {
	product: number;
	previewProduct: number;
	increase: () => void;
	decrease: () => void;
	AddCart: () => void;
	deleteProducts: () => void;
}

export const useCartStore = create<ProductState>()((set) => ({
	product: 0,
	previewProduct: 0,
	increase: () => set((state) => ({ previewProduct: state.previewProduct + 1 })),
	decrease: () =>
		set((state) => {
			if (state.previewProduct > 0) {
				return { previewProduct: state.previewProduct - 1 };
			}
			return state;
		}),
	AddCart: () =>
		set((state) => ({ product: state.product + state.previewProduct, previewProduct: 0 })),
	deleteProducts: () => set(() => ({ product: 0 })),
}));

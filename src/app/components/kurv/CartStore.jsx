"use client";
import create from "zustand";


const useCartStore = create((set) => ({
	items: [],
	isOpen: false,
	addItem: (product) =>
		set((state) => {
			const existing = state.items.find((item) => item.id === product.id);
			if (existing) {
				return {
					items: state.items.map((item) =>
						item.id === product.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
					isOpen: true, 
				};
			} else {
				return {
					items: [...state.items, { ...product, quantity: 1 }],
					isOpen: true,
				};
			}
		}),
	removeItem: (id) =>
		set((state) => ({
			items: state.items.filter((item) => item.id !== id),
		})),
	togglePanel: () =>
		set((state) => ({
			isOpen: !state.isOpen,
		})),
	closePanel: () =>
		set(() => ({
			isOpen: false,
		})),
}));

export default useCartStore;

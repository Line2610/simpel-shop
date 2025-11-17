"use client";
import create from "zustand";

// Zustand store for shopping cart
const useCartStore = create((set) => ({
	items: [],
	isOpen: false,
	addItem: (product) =>
		set((state) => {
			// Check if product already in cart
			const existing = state.items.find((item) => item.id === product.id);
			if (existing) {
				// Increment quantity
				return {
					items: state.items.map((item) =>
						item.id === product.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
					isOpen: true, // Auto-open cart when adding
				};
			} else {
				// Add new product with quantity 1
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

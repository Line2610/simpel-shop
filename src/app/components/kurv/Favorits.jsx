
"use client";
import create from "zustand";

// Simple zustand store for favorites
const useStore = create((set) => ({
	favorite: [],
	toggleFavorite: (id) =>
		set((state) => {
			const isFav = state.favorite.includes(id);
			return {
				favorite: isFav
					? state.favorite.filter((x) => x !== id)
					: [...state.favorite, id],
			};
		}),
}));

export default useStore;


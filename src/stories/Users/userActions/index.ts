import { create } from "zustand";

interface IBearState {
    bears: number;
    increasePopulation: () => void;
}

export const useBearStore = create<IBearState>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1}))
}))
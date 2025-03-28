
import { create } from "zustand";

type Platform = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const usePlatform = create<Platform>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));
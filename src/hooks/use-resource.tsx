
import { create } from "zustand";

type Resources = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useResources = create<Resources>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));
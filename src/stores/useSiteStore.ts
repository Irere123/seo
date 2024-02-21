import { create } from "zustand";

const useSiteStore = create((set) => ({
  url: "",
  setUrl: () => set((url: string) => ({ url })),
  removeUrl: () => set({ url: "" }),
}));

export default useSiteStore;

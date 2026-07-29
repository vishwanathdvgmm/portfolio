import { create, type StateCreator } from "zustand";
import type { SectionId } from "../types";

export interface UIState {
  activeSection: SectionId;
  isMenuOpen: boolean;
  selectedProjectId: string | null;
  isContactModalOpen: boolean;
  isAudioMuted: boolean;

  // Actions
  setActiveSection: (section: SectionId) => void;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
  setSelectedProjectId: (id: string | null) => void;
  setContactModalOpen: (open: boolean) => void;
  toggleAudioMuted: () => void;
}

const storeCreator: StateCreator<UIState> = (set) => ({
  activeSection: "hero",
  isMenuOpen: false,
  selectedProjectId: null,
  isContactModalOpen: false,
  isAudioMuted: true,

  setActiveSection: (section: SectionId) => set({ activeSection: section }),
  setMenuOpen: (open: boolean) => set({ isMenuOpen: open }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setSelectedProjectId: (id: string | null) => set({ selectedProjectId: id }),
  setContactModalOpen: (open: boolean) => set({ isContactModalOpen: open }),
  toggleAudioMuted: () =>
    set((state) => ({ isAudioMuted: !state.isAudioMuted })),
});

export const useUIStore = create<UIState>(storeCreator);

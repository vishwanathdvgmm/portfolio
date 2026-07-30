import { describe, it, expect, beforeEach } from "vitest";
import { useUIStore } from "../store/uiStore";

describe("useUIStore", () => {
  // Reset state before each test
  beforeEach(() => {
    useUIStore.setState({
      activeSection: "hero",
      isMenuOpen: false,
      selectedProjectId: null,
      isContactModalOpen: false,
      isAudioMuted: true,
    });
  });

  it("should initialize with default state", () => {
    const state = useUIStore.getState();
    expect(state.activeSection).toBe("hero");
    expect(state.isMenuOpen).toBe(false);
    expect(state.selectedProjectId).toBeNull();
    expect(state.isContactModalOpen).toBe(false);
    expect(state.isAudioMuted).toBe(true);
  });

  it("should set active section", () => {
    useUIStore.getState().setActiveSection("about");
    expect(useUIStore.getState().activeSection).toBe("about");
  });

  it("should toggle menu", () => {
    expect(useUIStore.getState().isMenuOpen).toBe(false);
    useUIStore.getState().toggleMenu();
    expect(useUIStore.getState().isMenuOpen).toBe(true);
    useUIStore.getState().toggleMenu();
    expect(useUIStore.getState().isMenuOpen).toBe(false);
  });

  it("should set selected project id", () => {
    useUIStore.getState().setSelectedProjectId("project-1");
    expect(useUIStore.getState().selectedProjectId).toBe("project-1");
  });

  it("should toggle audio", () => {
    expect(useUIStore.getState().isAudioMuted).toBe(true);
    useUIStore.getState().toggleAudioMuted();
    expect(useUIStore.getState().isAudioMuted).toBe(false);
  });
});

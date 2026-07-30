import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Navbar } from "../components/layout/Navbar";
import { useUIStore } from "../store/uiStore";

describe("Navbar", () => {
  beforeEach(() => {
    // Reset Zustand store
    useUIStore.setState({
      activeSection: "hero",
      isMenuOpen: false,
    });
  });

  it("renders desktop and mobile navigation links", () => {
    render(<Navbar />);

    // Check for logo
    expect(screen.getByText(/vishwanath\.dev/i)).toBeInTheDocument();

    // Desktop links
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it("toggles mobile menu when hamburger is clicked", () => {
    render(<Navbar />);

    // Menu is closed initially
    expect(useUIStore.getState().isMenuOpen).toBe(false);

    // Find toggle button and click
    const toggleButton = screen.getByRole("button", {
      name: /open menu/i,
      hidden: true,
    });
    if (toggleButton) {
      fireEvent.click(toggleButton);
      expect(useUIStore.getState().isMenuOpen).toBe(true);
    }
  });

  it("updates active section on click", () => {
    render(<Navbar />);

    const aboutLinks = screen.getAllByText("About");
    // Click the first one (desktop)
    fireEvent.click(aboutLinks[0]);

    expect(useUIStore.getState().activeSection).toBe("about");
  });
});

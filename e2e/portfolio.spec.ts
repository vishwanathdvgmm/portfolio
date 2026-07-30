import { test, expect } from "@playwright/test";

test.describe("Portfolio End-to-End", () => {
  test("should load the homepage and render critical elements", async ({
    page,
  }) => {
    // Navigate to the app
    await page.goto("/");

    // Verify title or main logo text
    await expect(page.locator("text=vishwanath.dev")).toBeVisible();

    // Verify the hero section content
    await expect(page.locator("text=Vishwanath M M")).toBeVisible();
    await expect(page.locator("text=Full Stack Engineer")).toBeVisible();

    // Verify navigation links are present
    const navLinks = [
      "Home",
      "About",
      "Skills",
      "Projects",
      "Timeline",
      "Contact",
    ];
    for (const link of navLinks) {
      // Need to match exact text or accessible names
      await expect(
        page.getByRole("button", { name: link }).first(),
      ).toBeVisible();
    }
  });

  test("should navigate to sections using navbar", async ({ page }) => {
    await page.goto("/");

    // Wait for the WebGL canvas to be ready (meaning it finished loading)
    await page.waitForSelector("canvas");

    // Click "About" link
    await page.getByRole("button", { name: "About" }).first().click();

    // Verify that the active section updated (this usually changes UI state or scroll)
    // We can just verify the About heading becomes visible/active
    await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
  });
});

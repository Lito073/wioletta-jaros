import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/over-ons", "/diensten", "/contact", "/vacatures"];

for (const route of routes) {
  test(`route ${route} rendert zonder kritieke axe-fouten`, async ({
    page,
  }) => {
    await page.goto(route);

    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();

    const accessibilityScan = await new AxeBuilder({ page }).analyze();
    const criticalViolations = accessibilityScan.violations.filter(
      ({ impact }) => impact === "critical",
    );

    expect(criticalViolations).toEqual([]);
  });
}

test("homepage toont primaire CTA en sticky headergedrag", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /Professioneel schoonmaakbedrijf/i,
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: /Vraag een vrijblijvende offerte aan/i,
    }),
  ).toBeVisible();

  const header = page.getByRole("banner");
  await expect(header).toBeVisible();
  await expect
    .poll(async () => header.getAttribute("class"))
    .toContain("fixed");

  await page.evaluate(() => window.scrollTo(0, 700));

  await expect.poll(async () => page.evaluate(() => window.scrollY)).toBe(700);
});

test.describe("mobiele navigatie", () => {
  test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });

  test("menu opent en navigeert naar contact", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: /Menu openen/i }).click();
    const mobileMenu = page.getByRole("dialog", { name: /Menu/i });
    await expect(mobileMenu).toBeVisible();

    await mobileMenu.getByRole("link", { name: /^Contact$/i }).click();

    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("banner")).toBeVisible();
  });
});

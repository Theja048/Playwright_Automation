import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("https://www.youtube.com/");
	await page.getByRole("combobox", { name: "Search" }).click();
	await page
		.getByRole("combobox", { name: "Search" })
		.fill("playwright testers talk");
	await page.getByRole("combobox", { name: "Search" }).press("Enter");
	await page
		.getByRole("link", { name: "Playwright by Testers Talk☑️" })
		.click();
	await page.locator("video").click();
	await expect(
		page.getByRole("link", { name: "Playwright by Testers Talk☑️" })
	).toBeVisible();
});

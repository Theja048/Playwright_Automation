import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
	console.log("running all before");
});

test.afterAll(async () => {
	console.log("running all after");
});

test("test1", async ({ page }) => {
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

test("test2", async ({ page }) => {
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

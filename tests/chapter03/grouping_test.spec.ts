import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
	test("test1 locators in playwright", async ({ page }) => {
		await page.goto("https://www.google.com");
		await page.getByTitle("search").fill("monicca");
	});
});

test.describe("reg", () => {
	test("test2", async ({ page }) => {
		await page.goto("https://www.google.com");
		await page.getByTitle("search").fill("monicca");
	});

	test("test3", async ({ page }) => {
		await page.goto("https://www.google.com");
		await page.getByTitle("search").fill("monicca");
	});
});

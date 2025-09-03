import { test, expect } from "@playwright/test";
//annotations
test("test1 locators in playwright", async ({ page }) => {
	await page.goto("https://www.google.com");
	await page.getByTitle("search").fill("monicca");
});

//skip
test("test2", async ({ page }) => {
	await page.goto("https://www.google.com");
	await page.getByTitle("search").fill("monicca");
});

//only
test.only("test3", async ({ page }) => {
	await page.goto("https://www.google.com");
	await page.getByTitle("search").fill("monicca");
});

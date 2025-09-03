import { test, expect } from "@playwright/test";

//tags
test("test1 locators in playwright", { tag: ["@reg"] }, async ({ page }) => {
	await page.goto("https://www.google.com");
	x;
	await page.getByTitle("search").fill("monicca");
});

test("test2", { tag: ["@smk"] }, async ({ page }) => {
	await page.goto("https://www.google.com");
	await page.getByTitle("search").fill("monicca");
});

test("test3", { tag: ["@smk", "@reg"] }, async ({ page }) => {
	await page.goto("https://www.google.com");
	await page.getByTitle("search").fill("monicca");
});

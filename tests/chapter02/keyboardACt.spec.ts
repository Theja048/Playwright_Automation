import { test, expect } from "@playwright/test";
//scenario
//naviagate to url
test("KEYBOARD actions in playwright", async ({ page }) => {
	// await page.goto("https://www.google.com");
	// await page.getByTitle("search").fill("monicca");
	// //await page.getByTitle("search").first().press("Enter");
	// await page.keyboard.press("Control+A");
	// await page.keyboard.press("Delete");

	//performing gtab functionality
	await page.goto("https://www.google.com");
	await page.getByTitle("search").first().press("Enter");
	await page.keyboard.press("Tab");
	await page.keyboard.press("Enter");
});

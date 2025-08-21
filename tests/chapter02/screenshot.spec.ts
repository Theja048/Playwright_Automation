import { test, expect } from "@playwright/test";
//scenario
//naviagate to url
test("test", async ({ page }) => {
	await test.step("naviage to url", async () => {
		await page.goto("https://www.youtube.com/@testerstalk");
	});

	await page
		.locator("#page-header-banner")
		.screenshot({ path: "./Screenshots/element_screenshot.png" });
});

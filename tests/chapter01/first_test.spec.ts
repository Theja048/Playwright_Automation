import { test, expect } from "@playwright/test";
//scenario
//naviagate to url
test("test", async ({ page }) => {
	await test.step("naviage to url", async () => {
		await page.goto("https://www.bing.com/");
	});
	//search keyword

	await test.step("enter keyword", async () => {
		await page
			.getByRole("textbox", { name: "characters out of 2000" })
			.fill("telusuko java");
		await page
			.getByRole("textbox", { name: "characters out of 2000" })
			.press("Enter");
	});
	//search for specific file
	await test.step("navigate to Telusko channel", async () => {
		await page.locator('a:has-text("Telusko")').first().click();
	});

	//validate title

	await test.step("validate title", async () => {
		await expect(
			page.getByLabel("Telusko, Verified").getByText("Telusko")
		).toBeVisible();
	});
});

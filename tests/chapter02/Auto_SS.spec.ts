import { test, expect } from "@playwright/test";
//scenario
//naviagate to url
test("test", async ({ page }) => {
	await test.step("naviage to url", async () => {
		await page.goto("https://www.bing.com/");
	});
	//search keyword
	await page.getByLabel("Search the web").locator("svg").click();
	await page
		.getByLabel("Search the web")
		.locator("svg")
		.fill("playwright testers talk");

	// await test.step("enter keyword", async () => {
	// 	await page
	// 		.getByRole("textbox", { name: "characters out of 2000" })
	// 		.fill(" playwright testers talk");

	await page.getByRole("textbox", { name: "characters out of 2000" }).click();
	const searchButton = page.locator("#sb_form_q"); // Bing's search button
	await expect(searchButton).toBeVisible();
	await searchButton.press("Enter");

	//await page.getByLabel("Search the web").locator("svg").click();
	await page.getByRole("link", { name: "Playwright API Testing by" });

	await page
		.getByRole("link", { name: "Playwright by Testers Talk☑️" })

		.click();

	await expect(
		page
			.getByRole("heading", { name: "Playwright by Testers Talk☑️" })
			.isVisible()
	);
});

import { test, expect } from "@playwright/test";
//scenario
//naviagate to url
test("locators in playwright", async ({ page }) => {
	// await test.step("naviage to url", async () => {
	// 	await page.goto("https://github.com/");
	// });
	//get by role used for links..
	//await page.getByRole("link", { name: "Sign in" }).click();

	//get by label used for homepage or page layouts
	//await page.getByLabel("Homepage", { exact: true }).first().click();

	//alt attributes used mostly on images

	//await page.goto("https://github.com/bakkappan");
	//await page.getByAltText("View BakkappaN's full-sized avatar").first().click();

	//testId used for tabs/subtabs
	//await page.getByTestId("repositories").first().click();

	//by text used for direct button links
	//await page.getByText("Sign up").click();

	//await page.goto("https://www.youtube.com/@testerstalk");
	//await page.getByPlaceholder("search").first().fill("monicca");
	//by xpath
	// await page
	// 	.locator('//input[@name="search_query"]')
	// 	.first()
	// 	.fill("monicca bellucci");
	//by css selector
	//await page.locator('[name="search_query"]').first().fill("monicca bellucci");
	await page.goto("https://www.google.com");
	await page.getByTitle("search").fill("monicca");
});

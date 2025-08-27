import { test, expect } from "@playwright/test";
//scenario
//naviagate to url
test("test", async ({ page }) => {
	await test.step("naviage to url", async () => {
		await page.goto("https://www.youtube.com/@testerstalk");

		//hard assertions
		//is visible or not
		// await page.getByTitle("Search", { exact: true }).first().isVisible();

		// await page.getByPlaceholder("Search", { exact: true }).first().isVisible();
		// await expect(
		// 	page.getByPlaceholder("Search", { exact: true }).first()
		// ).toBeEditable();
		// await expect(
		// 	page.getByPlaceholder("Search", { exact: true }).first()
		// ).toBeEmpty();

		await page.getByPlaceholder("Search", { exact: true }).first().isVisible();
		await page
			.getByPlaceholder("Search", { exact: true })
			.first()
			.fill("coolie");
		await page
			.getByPlaceholder("Search", { exact: true })
			.first()
			.press("Enter");

		await expect(page).toHaveURL(
			"https://www.youtube.com/results?search_query=coolie"
		);
		await expect.soft(page).toHaveTitle("coolie12 - YouTube");
		//more then expected string to match we use like this
		await expect(
			page.getByLabel("Kokki 3 minutes, 53 seconds").nth(0)
		).toHaveText(/kokki/i);
		//we are making soft assertions and provided expected error
		await expect
			.soft(page.getByLabel("Kokki 3 minutes, 53 seconds"))
			.toHaveCount(2);
	});
});

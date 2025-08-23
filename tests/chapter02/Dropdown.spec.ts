import { test, expect } from "@playwright/test";

test("drop down", async ({ page }) => {
	await page.goto("https://www.facebook.com/");
	await page.getByRole("button", { name: "Create new account" }).click();
	//await page.getByLabel("Month").selectOption("1");
	//await page.getByLabel("Month").selectOption("Dec");

	await expect(page.locator("#month > option")).toHaveText([
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]);
});

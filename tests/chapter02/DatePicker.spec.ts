import { test, expect } from "@playwright/test";

test("date picker", async ({ page }) => {
	// await page.goto("https://jqueryui.com/datepicker/");
	// const ifram = await page.frameLocator('[class="demo-frame"]');
	// await ifram.locator('[id = "datepicker"]').fill("11/10/2025");

	//dynamically select date
	await page.goto("https://jqueryui.com/datepicker/");
	const ifram = await page.frameLocator('[class="demo-frame"]');
	await ifram.locator('[id = "datepicker"]').click();
	//await ifram.locator(".ui-datepicker-today").click();
	//past date
	await ifram.locator('[title = "Prev"]').click();
	await ifram.locator('text="10"').click();
});

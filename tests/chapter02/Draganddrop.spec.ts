import { test, expect } from "@playwright/test";

test("drag and drop", async ({ page }) => {
	await page.goto("https://jqueryui.com/droppable/");

	const iframel = await page.frameLocator('[class="demo-frame"]');

	const drag1 = await iframel.locator('[id="draggable"]');

	const drop1 = await iframel.locator('[id="droppable"]');

	await drag1.dragTo(drop1);
});

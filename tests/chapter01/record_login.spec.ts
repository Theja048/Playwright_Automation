import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await test.step("navigate to url", async () => {
		await page.goto("https://www.facebook.com/");
	});

	await test.step("enter username and password", async () => {
		await page.getByTestId("royal-email").fill("aa@dminn");
		await page.getByTestId("royal-pass").click();
		await page.getByTestId("royal-pass").fill("1234@");
		await page.getByTestId("royal-login-button").click();
	});

	await test.step("validate error message", async () => {
		await expect(page.locator("#email_container")).toContainText(
			"The email address or mobile number you entered isn't connected to an account. Find your account and log in."
		);
	});
});

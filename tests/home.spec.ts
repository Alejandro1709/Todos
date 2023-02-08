import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://todos-ten-iota.vercel.app/');
});

test.describe('InputBar', () => {
  test('Has ImputBar', async ({ page }) => {
    const inputForm = await page.getByRole('form');
    expect(inputForm).toBeTruthy();
  });

  test('Has input field', async ({ page }) => {
    const inputField = await page.getByRole('textbox');
    expect(inputField).toBeTruthy();
  });

  test('Has submit button', async ({ page }) => {
    const submitButton = await page.getByRole('button', { name: 'Add' });
    expect(submitButton).toBeTruthy();
  });

  test('Should be able to type in input field', async ({ page }) => {
    await page.getByRole('form').click();
    await page.getByPlaceholder('Buy some milk').click();
    await page.getByPlaceholder('Buy some milk').fill('dfgfg');
    await page.getByRole('button', { name: 'Add' }).click();
  });
});

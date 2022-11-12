const { test, expect} = require("@playwright/test");
const { username, password } = require('./user.js');

test("Positive auth test", async ({ page}) => {
  await page.goto("https://netology.ru");
  await page.click('text=Войти');
  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', username);
  await page.click('[placeholder="Пароль"]');

  await page.fill('[placeholder="Пароль"]', password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL('https://netology.ru/profile');
  await expect(page.locator('h2')).toHaveText('Мои курсы и профессии');
});

test("Negative auth test", async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.click('text=Войти');
  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', 'boarder_bare@mail.ru');
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', '1');
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText('Вы ввели неправильно логин или пароль');
});

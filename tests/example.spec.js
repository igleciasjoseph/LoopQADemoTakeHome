const { test, expect } = require("@playwright/test");

const BASE_URL = "https://animated-gingersnap-8cf7f2.netlify.app/";
const USERNAME = "admin";
const PASSWORD = "password123";

const testCases = [
  {
    description: 'Case 1 - Web Application: Verify "Implement User Authentication" in "To Do" column with "Feature, High Priority" tags',
    app: 'Web Application',
    column: 'To Do',
    task: 'Implement user authentication',
    tags: ['Feature', 'High Priority'],
  },
  {
    description: 'Case 2 - Web Application: Verify "Fix navigation bug" in "To Do" column with "Bug" tag',
    app: 'Web Application',
    column: 'To Do',
    task: 'Fix navigation bug',
    tags: ['Bug'],
  },
  {
    description: 'Case 3 - Web Application: Verify "Design system updates" in "In Progress" column with "Design" tag',
    app: 'Web Application',
    column: 'In Progress',
    task: 'Design system updates',
    tags: ['Design'],
  },
  {
    description: 'Case 4 - Mobile Application: Verify "Push notification system" in "To Do" column with "Feature" tag',
    app: 'Mobile Application',
    column: 'To Do',
    task: 'Push notification system',
    tags: ['Feature'],
  },
  {
    description: 'Case 5 - Mobile Application: Verify "Offline mode" in "In Progress" column with "Feature, High Priority" tags',
    app: 'Mobile Application',
    column: 'In Progress',
    task: 'Offline mode',
    tags: ['Feature', 'High Priority'],
  },
  {
    description: 'Case 6 - Mobile Application: Verify "App icon design" in "Done" column with "Design" tag',
    app: 'Mobile Application',
    column: 'Done',
    task: 'App icon design',
    tags: ['Design'],
  },
];

async function login(page) {
  await page.goto(BASE_URL);
  await page.getByLabel("Username").fill(USERNAME);
  await page.getByLabel("Password").fill(PASSWORD);
  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
}

test.describe("Dynamic Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  for (const testCase of testCases) {
    test(testCase.description, async ({ page }) => {
      await page.getByRole("button", { name: testCase.app }).click();
      const column = page.locator(`h2:has-text("${testCase.column}")`).locator("..");
      const task = column.locator(`h3:has-text("${testCase.task}")`);
      await expect(task, `Task "${testCase.task}" not found in column "${testCase.column}"`).toBeVisible();

      const tagsContainer = task.locator("..").locator("div.flex.flex-wrap");
      for (const tag of testCase.tags) {
        await expect(tagsContainer.locator(`span:has-text("${tag}")`)).toBeVisible();
      }
    });
  }
});

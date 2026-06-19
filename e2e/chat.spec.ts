import { test, expect } from '@playwright/test';

test.describe('Chat Portal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display chat toggle button', async ({ page }) => {
    const toggleButton = page.locator('button[aria-label="Toggle chat"]');
    await expect(toggleButton).toBeVisible();
    expect(await toggleButton.textContent()).toBe('💬');
  });

  test('should open chat window when button is clicked', async ({ page }) => {
    const toggleButton = page.locator('button[aria-label="Toggle chat"]');
    await toggleButton.click();

    const chatHeader = page.locator('h2');
    await expect(chatHeader).toContainText('Chat with us');
  });

  test('should display dummy messages', async ({ page }) => {
    const toggleButton = page.locator('button[aria-label="Toggle chat"]');
    await toggleButton.click();

    // Check for some of the dummy messages
    await expect(
      page.locator('text=Hi! How can I help you today?')
    ).toBeVisible();
    await expect(
      page.locator("text=I'm interested in your portfolio projects")
    ).toBeVisible();
  });

  test('should close chat window when close button is clicked', async ({ page }) => {
    const toggleButton = page.locator('button[aria-label="Toggle chat"]');
    
    // Open chat
    await toggleButton.click();
    const chatHeader = page.locator('h2');
    await expect(chatHeader).toBeVisible();

    // Close chat
    const closeButton = page.locator('button[aria-label="Close chat"]');
    await closeButton.click();
    
    await expect(chatHeader).not.toBeVisible();
  });

  test('should allow typing a message', async ({ page }) => {
    const toggleButton = page.locator('button[aria-label="Toggle chat"]');
    await toggleButton.click();

    const input = page.locator('input[placeholder="Type your message..."]');
    await input.fill('Hello, how are you?');

    await expect(input).toHaveValue('Hello, how are you?');
  });

  test('should send a message and display bot response', async ({ page }) => {
    const toggleButton = page.locator('button[aria-label="Toggle chat"]');
    await toggleButton.click();

    const input = page.locator('input[placeholder="Type your message..."]');
    const sendButton = page.locator('button:has-text("Send")');

    await input.fill('Test message');
    await sendButton.click();

    // Message should be cleared
    await expect(input).toHaveValue('');

    // Bot response should appear
    await expect(
      page.locator('text=Thank you for your message!')
    ).toBeVisible({ timeout: 2000 });
  });
});

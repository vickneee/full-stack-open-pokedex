// eslint-disable-next-line no-undef
const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('from main pokemon page navigate to page where is word chlorophyll', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="/pokemon/ivysaur"]')
    await expect(page.getByText('chlorophyll')).toBeVisible() // Lowercase 'c' in the source code
    // await expect(page.getByText('chllllllorophyll')).toBeVisible() // this test should fail
  })
})

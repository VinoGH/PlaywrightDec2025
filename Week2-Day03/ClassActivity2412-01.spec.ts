import test from '@playwright/test'

test("Locator using with Css", async ({ page }) => {

  await page.goto("https://login.salesforce.com/?locale=in")

  await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")

  await page.locator("[name='pw']").fill("TestLeaf@2025")

  await page.locator("#Login").click() //input[id='Login']

  await page.waitForTimeout(12000)

  //get the title
  let title = await page.title()
  console.log(title)

  //await page.locator("text='CRM/SFA'").click()
})
import test from '@playwright/test'

test("dropdown_facebook",async({page})=>{

    await page.goto("https://en-gb.facebook.com/")
    await page.waitForTimeout(3000);
    await page.locator("//a[contains(text(),'account')]").click();
    await page.locator("//input[@name='firstname']").fill("VINOTH")
    await page.locator("//input[@name='lastname']").fill("R")
    await page.selectOption("#day",{value:"9"})
    //await page.selectOption("#month",{index:8})
    await page.selectOption("#month",{label:"Sep"})
    await page.selectOption("#year",{label:"1981"})
    await page.locator("(//input[@type='radio'])[2]").click()
    await page.locator("//input[@name='reg_email__']").fill("abc@def.com")
    await page.locator("//input[@name='reg_passwd__']").fill("password@1")
    await page.locator("#password_step_input").fill("Password@123")
    //await page.locator("//input[@name='websubmit']").click()
    await page.waitForTimeout(3000);

})
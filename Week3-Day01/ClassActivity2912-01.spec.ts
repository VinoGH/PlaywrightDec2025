import {test} from "@playwright/test"

test('Select dropdown', async({page})=>{

    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("#Dropdown-1", {value:"Renewal"})
    await page.selectOption("#Dropdown-2", {label:"DevCraft"})
    await page.selectOption("#Country-1", {index:5})
})









/*import { test } from "@playwright/test"

test ("Select DropDown Example", async({page})=>{
    await page.goto("https://www.telerik.com/contact")

    await page.selectOption("select#Country-1",{label:"United States"})
    await page.waitForTimeout(2000)
    await page.selectOption("select#Country-1",{index:5})
    await page.waitForTimeout(2000)
    await page.selectOption("select#Country-1",{value:"India"})

})*/
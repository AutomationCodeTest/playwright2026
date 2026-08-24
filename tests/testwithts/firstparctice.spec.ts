import{test,expect} from "@playwright/test"

test("launch and navigate" ,async({page})=>
{

    await page.goto("https://www.saucedemo.com/")

    //Verifies the page title

    await expect(page).toHaveTitle(/Swag Labs/)
    //Verifies the URL
    await expect(page).toHaveURL(/saucedemo/)

   // Closes the browser
   await page.close()
})

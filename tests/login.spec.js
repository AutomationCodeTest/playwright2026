import{test,expect} from "@playwright/test"

test("login",async function({page}))
{
   await page.goto("https://www.google.com/")

await page.locator("#APjFqb").fill("hello javascript")
    
}
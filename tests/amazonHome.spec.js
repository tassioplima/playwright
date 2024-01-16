import {test, expect} from '@playwright/test'

test.use({
    locale: 'pt-BR',
    headless: true
})

test.beforeEach(async ({page})=> {
global.page = page
} ) 

test.afterEach (async ({page})=>{
    await page.close();
})

const url = 'https://www.amazon.es/';


test('Validate main page amazon', async() =>{
    await test.step('navigate from main page amazon.com', async () => {
        await page.goto(url);
    })

    await test.step('validate url', async () => {
        const currentUrl = page.url();
        expect(currentUrl).toBe(url);
    })

    await test.step('validate waits and locators',  async () => {
        await page.waitForSelector('#nav-logo-sprites');
        const logoElement = page.locator('#nav-logo-sprites');
        const searchInput = page.locator('#twotabsearchtextbox');
        const searchButton = page.locator('.nav-search-submit');

        await expect(logoElement).toBeVisible();
        await expect(searchInput).toBeVisible();
        await expect(searchButton).toBeVisible();
    })

})

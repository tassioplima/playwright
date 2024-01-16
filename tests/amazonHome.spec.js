// @ts-check
const { test, expect } = require('@playwright/test');
const { AmazonHomePage } = require("../pages/homePageAmazon")

const homePage = new AmazonHomePage()

test(`Successfully Search for ${homePage.ObjectsPage.ProductTarget} on Amazon`, async ({ page }) => {
  global.page = page

  await test.step('Navigate to the main screen of amazon.com', async () => {
    await homePage.navegatTo();
  })

  await test.step('Main screen of Amazon is displayed', async () => {
    await homePage.validateHomePage()
  })
  
  await test.step(`Search for the product  ${homePage.ObjectsPage.ProductTarget}`, async () => {
    await homePage.validateSearchProduct(homePage.ObjectsPage.ProductTarget)
  })

  await test.step(`Validate the found product`, async () => {
    await homePage.validateSearchProduct(homePage.ObjectsPage.ProductTarget)
  })

});
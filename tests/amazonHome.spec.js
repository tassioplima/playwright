// @ts-check
const { test, expect } = require('@playwright/test');
const { AmazonHomePage } = require("../pages/homePageAmazon")
const { ProductPage } = require("../pages/productPageAmazon")
const { CartPage } = require("../pages/cartPageAmazon")

const homePage = new AmazonHomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()

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

test('Successfully Add Product to Cart', async ({ page }) => {
  global.page = page

  await test.step('Navigate to the main screen of amazon.com', async () => {
    await homePage.navegatTo();
  })

  await test.step('Main screen of Amazon is displayed', async () => {
    await homePage.validateHomePage()
  })
  
  await test.step(`Access the  ${homePage.ObjectsPage.ProductTarget}  product page.`, async () => {
    await homePage.clickBoxResultAfterSearch(homePage.ObjectsPage.ProductTarget)
  })

  await test.step(`Validate the product page.`, async () => {
    const descProduct = "Uma sociedade secreta, traiçoeira e liderada por famílias ricas e influentes assombra os cidadãos de Gotham City e coloca em risco a segurança da cidade e do próprio Batman. A Corte das Corujas, há muito escondida sob a sombras do submundo, vai mostrar suas garras novamente, e desta vez, da maneira mais impiedosa possível. Um romance original de Greg Cox, autor best-seller de diversas novelizações de filmes, entre as quais Batman – O Cavaleiro das Trevas Ressurge." 
    await productPage.validateProductPage(homePage.ObjectsPage.ProductTarget,descProduct )
    await productPage.clickAddCart()
  })
  
  await test.step(`Validate the product in the cart.`, async () => {
    await cartPage.validateFirstCart()
    await cartPage.validateSecondCart(homePage.ObjectsPage.ProductTarget)
  })

});
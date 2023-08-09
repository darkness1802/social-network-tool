import { Page } from "puppeteer"

const TEST_EMAIL = "tlt.hp69@gmail.com"
const TEST_PASSWORD = "DKM004"

const login = async (page: Page) => {
    await page.type('#email', TEST_EMAIL)
    await page.type('#pass', TEST_PASSWORD)
    const loginBtn = await page.waitForXPath("/html/body/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button")
    // @ts-ignore
    await loginBtn?.click()

    await page.click("body")
    
    // await page.waitForSelector('.mzan44vs')

    // Tới đây chúng ta đã login thành công vào hệ thống.

    // await page.click('._6s5d') // Giả lập click chuột vào màn hình để tắt đi cái "notifications"
}

export default login
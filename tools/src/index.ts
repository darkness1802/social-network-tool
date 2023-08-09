import { Builder, Browser, By, Key, until } from "selenium-webdriver"
import { io } from "socket.io-client"

async function facebook (user: {
    email: string,
    password: string
}) {
    const driver = await new Builder().forBrowser(Browser.FIREFOX).build()
    try {
        let socket = io("http://localhost:7777")
        console.log(user)
        await driver.get(`https://facebook.com`)

        await driver.findElement(By.id("email")).sendKeys(user.email)
        await driver.findElement(By.id("pass")).sendKeys(user.password)

        // trong truong hop can thiet phai su dung den cookie: https://viblo.asia/p/tao-mot-tro-ly-ao-tren-facebook-tu-dong-gui-tin-tuc-moi-nhat-hang-ngay-bang-python-selenium-eW65G1L9ZDO

        /* Xu ly login */

        /*
            - Xu ly event voi socket (client)
            - Vi du cac event nhu like, follow cho 1 user nao do

            Vi du: socket.on("like", data => {
                // chuyen huong driver toi ${data.to}
                // xu ly like, follow, ...
            })
        */

            socket.on("like", data => {
                console.log(data.to)   
            })
    } catch(err) {
        console.log(err)
        await driver.quit()
    }
}

const users = [
    { email: "test01@gmail.com", password: "123123" },
    { email: "test02@gmail.com", password: "123123" },
    { email: "test03@gmail.com", password: "123123" },
]

const handers = users.map(i => facebook(i))

Promise.all(handers)
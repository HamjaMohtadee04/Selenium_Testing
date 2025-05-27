// const { Builder, Browser } = require("selenium-webdriver")
//click, sendkeys(),scrollview(),select()

//sync,async
import { Builder, Browser ,By, Key} from "selenium-webdriver";
let driver = new Builder().forBrowser(Browser.CHROME).build();
async function testRunner() {
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    //get title of website
    console.log(`Site title: ${await driver.getTitle()}`);
    //find search button
    await driver.findElement(By.className("search-icon")).click()

    //enter product name on search button
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike Air",Key.ENTER)
    // await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER)
    await driver.sleep(5000);
    await driver.quit();
}
testRunner()







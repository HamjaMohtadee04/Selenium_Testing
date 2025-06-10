import { Builder, Browser,By}from "selenium-webdriver"
//click, sendkeys(),scrollview(),select()
import { expect } from "chai";
//sync,asyn
// import { Builder, Browser ,By, Key, Actions} from "selenium-webdriver";
 let driver = new Builder().forBrowser(Browser.CHROME).build();
const searchText = "Nike Air"
const expectedProduct = "Nike air presto by you"


async function testRunner() {
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    const siteTitle =await driver.getTitle()
    const expectedTitle = "An Amazing Evershop Store"
    expect(expectedTitle).to.eql(siteTitle)
    //get title of website
    // console.log(`Site title: ${await driver.getTitle()}`);
    //find search button
    // await driver.findElement(By.className("search-icon")).click()

    //enter product name on search button 
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike Air",Key.ENTER)
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER)
   
    // const actions =driver.actions({async:true})
    // let element =await driver.findElement(By.xpath("//a[contains(text(),'Shop')]"))
    // await actions.move({origin:element}).perform()

    // await driver.sleep(5000)
    // await driver.findElement(By.xpath("//a[contains(text(),'Men')]")).click()
    await driver.sleep(5000);
    await driver.quit();
}
testRunner()







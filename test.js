import { Builder, Browser,By, Key, error}from "selenium-webdriver"
//click, sendkeys(),scrollview(),select()
import { expect } from "chai";
//sync,asyn
// import { Builder, Browser ,By, Key, Actions} from "selenium-webdriver";
 let driver = new Builder().forBrowser(Browser.CHROME).build();
const searchText = "Nike air"
const expectedProduct ='Nike air presto by you'


async function testRunner() {
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    const siteTitle =await driver.getTitle()
    const expectedTitle = "An Amazing EverShop Store"
    expect(expectedTitle).to.eql(siteTitle)
     await driver.findElement(By.className("search-icon")).click()
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(searchText,Key.ENTER)

  const searchedResult =  await driver.findElements(By.xpath(`//span[contains(text(),'${searchText}')]`)) 
  for(let i=0;i<searchedResult.length;i++){
    let currentProduct = await searchedResult[i].getText()
     var searchCount = 0;
    try{
  expect(expectedProduct).to.eql(currentProduct);
  searchCount++;
    }catch(error){
        console.log("searched product not found yet");
    } 
  }
  if(searchCount==0){
    throw new Error("searched product not found")
   } 
   
    // const actions =driver.actions({async:true})
    // let element =await driver.findElement(By.xpath("//a[contains(text(),'Shop')]"))
    // await actions.move({origin:element}).perform()

    // await driver.sleep(5000)
    // await driver.findElement(By.xpath("//a[contains(text(),'Men')]")).click()
    await driver.sleep(5000);
    await driver.quit();
}
testRunner()







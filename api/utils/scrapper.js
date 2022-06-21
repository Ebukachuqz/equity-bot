// We use some puppeteer-extra and a plugin to bypass the Bot checks on the site
require("dotenv").config();

// Db
const ScrappedData = require("../model/ScrappedData");

// environment variables
const baseUrl = process.env.BASE_URL;
const loginId = process.env.LOGIN_ID;
const password = process.env.PASSWORD;
const server = process.env.SERVER;

// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require("puppeteer-extra");

// add stealth plugin
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const scrapeData = () => {
  // launch puppeteer
  puppeteer.launch({ headless: true }).then(async (browser) => {
    console.log("Puppeteer Has launched...");
    const page = await browser.newPage();
    await page.goto(baseUrl);
    // wait for the login form to be rendered before proceeding
    await page.waitForSelector("#login");

    //   fil in form details
    await page.type("#login", loginId);
    await page.type("#password", password);

    // server
    await page.focus("#server"); // changing cursor focus to server inputField
    await page.$eval("#server", (el) => (el.value = "")); // clearing any existing value
    await page.keyboard.type(server); // typing server

    // to click the radio button, dom.queryselect the element then click method
    await page.evaluate(() => {
      let radio = document.querySelector("#mt4-platform");
      radio.click();
    });
    await page.keyboard.press("Enter"); // pressing enter on keyboard to submit form
    await page.screenshot({
      path: "./screenshots/filled-form.png",
      fullPage: false,
    });

    await page.waitForSelector(
      "body > div.page-window.market-watch.compact > div > div.b > div.page-block > div > table > tbody > tr:nth-child(1) > td.symbol"
    );
    // wait for an element that needs internet to load to be sure there is internet connection before scraping
    await page.waitForXPath(
      "/html/body/div[5]/div/div[3]/div[1]/div/table/tbody/tr[1]/td[1]"
    );
    await page.waitForTimeout(10000); // wait an extra 10secs for page to load fully
    await page.screenshot({
      path: "./screenshots/navigation-page.png",
      fullPage: false,
    });

    // scrape marketwatch
    let marketwatchTime = await page.$eval(
      "body > div.page-window.market-watch.compact > div > div.h",
      (el) => el.textContent
    );
    marketwatchTime = marketwatchTime.split(" ")[2];
    console.log(marketwatchTime);

    // scrape equity and balance
    let price = await page.$eval(
      "body > div.page-block.frame.bottom > div:nth-child(3) > table > tbody > tr > td.iconed > div > span",
      (el) => el.textContent
    );
    console.log(price);

    // clean scraped data
    let priceList = price.split(" ");
    let balance = priceList[1];
    let equity = priceList[3].slice(0, 8);
    console.log(balance, equity);

    // Sava data to Database
    const scrappedData = { balance, equity, marketwatchTime };
    const data = await ScrappedData.create({ ...scrappedData });
    console.log("Data added to db", data);

    await browser.close();
    console.log(`All done, check the screenshot.`);
  });
};

module.exports = { scrapeData };

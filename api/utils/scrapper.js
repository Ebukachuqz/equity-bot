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
const { text } = require("express");
puppeteer.use(StealthPlugin());

const scrapeData = async () => {
  try {
    // launch puppeteer
    puppeteer
      .launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        slowMo: 900,
      })
      .then(async (browser) => {
        console.log("Puppeteer Has launched...");
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(120000); // set default timeout to 2mins
        await page.goto(baseUrl, { waitUntil: "load", timeout: 120000 });
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

        await page.waitForTimeout(10000); // wait for 10secs for page to load fully.
        await page.screenshot({
          path: "./screenshots/navigation-page.png",
          fullPage: false,
        });

        // scrape marketwatch
        let [marketwatchTime] = await page.$x("/html/body/div[5]/div/div[1]");
        marketwatchTime = await page.evaluate(
          (el) => el.textContent,
          marketwatchTime
        );

        marketwatchTime = marketwatchTime.split(" ")[2];
        console.log(marketwatchTime);

        // scrape equity and balance
        let price = await page.$eval(
          "body > div.page-block.frame.bottom > div:nth-child(3) > table > tbody > tr.total > td.iconed > div > span",
          (el) => el.innerText
        );
        // let [price] = await page.$x(
        //   "/html/body/div[6]/div[3]/table/tbody/tr[4]/td[1]/div/span"
        // );
        console.log(price);
        // price = await price.getProperty("textContent");
        // console.log(price, "prps");
        // price = await text.jsonValue();
        // console.log(price, "text json value");

        // clean scraped data
        let priceList = price.split(" ");
        let currency = priceList[2].slice(0, 4);
        let balance = priceList[1];
        let equity = priceList[3].slice(0, 8);
        console.log(currency, balance, equity);

        // Sava data to Database
        const scrappedData = { balance, equity, currency, marketwatchTime };
        const data = await ScrappedData.create({ ...scrappedData });
        console.log("Data added to db");

        // close browser
        await browser.close();
        console.log(`All done, check the screenshot.`);
      });
  } catch (error) {
    console.log(
      "Puppeteer selector error, selector path as been changed again, check ur code and change selector",
      error
    );
  }
};

module.exports = { scrapeData };

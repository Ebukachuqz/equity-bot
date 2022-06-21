require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");
const app = express();
const cors = require("cors");
const { scrapeData } = require("./utils/scrapper");

// MiddleWares
app.use(express.json);
app.use(cors());

const port = process.env.PORT || 4000;
const startApp = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`app is listening on ${port}`));
  scrapeData(); // initial call to scrape data as server fires up
  setInterval(scrapeData, 60000); // scrape data every 5mins
};

startApp();

require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/connectDB");
const cors = require("cors");
const { scrapeData } = require("./utils/scrapper");

// MiddleWares
app.use(express.json); // express body parser
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const homepage = require("./routes/Home");
// Route
app.use("/", homepage);

const port = process.env.PORT || 4000;

const startApp = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`app is listening on ${port}`));
  scrapeData(); // initial call to scrape data as server fires up
  setInterval(scrapeData, 300000); // scrape data every 5mins
};

startApp();

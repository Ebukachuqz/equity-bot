require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const path = require("path");

const connectDB = require("./db/connectDB");
const cors = require("cors");
const { scrapeData } = require("./utils/scrapper");
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

// MiddleWares
app.use(express.json()); // express body parser
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// using client/build as express static file for backend
app.use(express.static(path.join(__dirname, "/client/build")));

// Route
const homepage = require("./routes/Home");
app.use("/api", homepage);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});
// errors middleware
app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 8080;

const startApp = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`app is listening on ${port}`));
  scrapeData(); // initial call to scrape data as server fires up
  setInterval(() => scrapeData(), 300000); // scrape data every 5mins
};

startApp();

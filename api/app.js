const express = require("express");
const app = express();

// MiddleWares
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;
const startApp = () => {
  app.listen(port, () => console.log(`app is listening on ${port}`));
};

startApp();

const ScrappedData = require("../model/ScrappedData");

const getData = (req, res) => {
  // Query Db for the latest record
  console.log("Home");
  const data = await ScrappedData.find().sort({ $natural: -1 }).limit(1);
  res.status(200).json(data)
};

module.exports = { getData };

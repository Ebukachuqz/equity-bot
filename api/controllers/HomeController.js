const ScrappedData = require("../model/ScrappedData");

const getData = async (req, res) => {
  console.log("Home");
  // Query Db for the latest record
  const data = await ScrappedData.find().sort({ $natural: -1 }).limit(1);
  res.status(200).json(data);
};

module.exports = { getData };

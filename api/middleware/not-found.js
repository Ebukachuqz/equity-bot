const notFound = (req, res) => {
  return res.status(404).json({ message: "Page not Found" });
};

module.exports = notFound;

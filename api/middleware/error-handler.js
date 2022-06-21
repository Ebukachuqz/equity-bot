const errorHandler = (err, req, res, next) => {
  console.log(err);

  let customError = {
    statusCode: err.statusCode || 500,
    message:
      err.message || "Oops! Something went wrong. Please Try again later.",
  };

  return res.status(customError.statusCode).json({ customError });
};

module.exports = errorHandler;

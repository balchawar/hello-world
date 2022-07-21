exports.healthCheck = (req, res, next) => {

  return res.status(200).json({
    status: 200,
    msg: "test service is active"
  });
}
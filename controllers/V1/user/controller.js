const httpStatus = require("http-status");
const { User } = require("../../../models");

const listAll = async (req, res) => {
  const data = await User.find({ isActive: true }).select("name mobileNumber");

  return res.status(httpStatus.OK).send({ data });
};

module.exports = { listAll };

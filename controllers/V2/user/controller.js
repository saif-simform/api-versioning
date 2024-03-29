const httpStatus = require("http-status");
const { User } = require("../../../models");

const listAll = async (req, res) => {
  const userInstance = await User.findOne({ isActive: true }).select(
    "name mobileNumber email"
  );

  const data = userInstance.toJSON();
  data.fullName = data.name;
  delete data.name;

  return res.status(httpStatus.OK).send({ data });
};

module.exports = { listAll };

const httpStatus = require("http-status");
const { User } = require("../../models");

const getUsers = async (req, res) => {
  const version = req.query.version || "1.0"; //Default to verison "1.0" if not specified

  if (version === "1.0") {
    const data = await User.find({ isActive: true }).select(
      "name mobileNumber"
    );

    return res.status(httpStatus.OK).send({ data });
  } else if (version === "2.0") {
    const userInstance = await User.findOne({ isActive: true }).select(
      "name mobileNumber email"
    );

    const data = userInstance.toJSON();
    data.fullName = data.name;
    delete data.name;

    return res.status(httpStatus.OK).send({ data });
  } else {
    return res
      .status(httpStatus.NOT_FOUND)
      .send({ error: `Invalid API version` });
  }
};

module.exports = { getUsers };

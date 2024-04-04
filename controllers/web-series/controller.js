const httpStatus = require("http-status");
const { WebSeries } = require("../../models");

const getWebSeries = async (req, res) => {
  // Get accept header
  const acceptHeader =
    req.header("Accept") || "application/vnd.example.v1+json";

  if (acceptHeader === "application/vnd.example.v1+json") {
    const data = await WebSeries.find({ isActive: true }).select(
      " description name actor"
    );

    return res.status(httpStatus.OK).send({ data });
  } else if (acceptHeader === "application/vnd.example.v2+json") {
    const data = await WebSeries.find({ isActive: true })
      .populate({
        path: "actor",
        select: "name description",
      })
      .select("description name actor image bannerImage");

    return res.status(httpStatus.OK).send({ data });
  } else {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ error: "Invalid API version specified" });
  }
};

module.exports = { getWebSeries };

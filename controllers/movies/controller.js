const httpStatus = require("http-status");
const { Movies } = require("../../models");

const getMovies = async (req, res) => {
  const acceptVersion = req.header("Accespt-Version") || "1.0";
 
  if (acceptVersion === "1.0") {
    const data = await Movies.find({ isActive: true }).select(
      "name link description directors actor"
    );

    return res.status(httpStatus.OK).send({ data });
  } else if (acceptVersion === "2.0") {
    const data = await Movies.find({ isActive: true })
      .populate([
        {
          path: "directors actor",
          select: "name image description",
        },
      ])
      .select("name link description directors actor");

    return res.status(httpStatus.OK).send({ data });
  } else {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ error: "Invalid API version specified" });
  }
};

module.exports = { getMovies };

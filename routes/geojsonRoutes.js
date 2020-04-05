const mongoose = require("mongoose");
const geojson = mongoose.model("geojsons");

module.exports = app => {
  // READ API
  app.get(`/api/geojson`, async (req, res) => {
    let geojsons = await geojson.find();
    return res.status(200).send(geojsons);
  });

  // GET SAME YEAR API
  app.get(`/api/geojson/:year`, async (req, res) => {
    const { year } = req.params;
    let geojsons = await geojson.find({ year: year });
    return res.status(200).send(geojsons);
  });

  // GET SPECIFIC ID ENTITY API
  app.get(`/api/geojson/id/:id`, async (req, res) => {
    const { id } = req.params;
    let geojsons = await geojson.findById(id);

    return res.status(202).send(geojsons);
  });

  // CREATE API
  app.post(`/api/geojson`, async (req, res) => {
    let geojson_tmp = await geojson.create(req.body);
    return res.status(201).send({
      error: false,
      geojson_tmp
    });
  });

  // UPDATE API
  app.put(`/api/geojson/:id`, async (req, res) => {
    const { id } = req.params;

    await geojson.findByIdAndUpdate(id, req.body);
    console.log(req.body);

    return res.status(202).send({
      messege: "Successfully updated"
    });
  });

  // DELETE API
  app.delete(`/api/geojson/:id`, async (req, res) => {
    const { id } = req.params;

    let geojson_tmp = await geojson.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      geojson_tmp
    });
  });
};

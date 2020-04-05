const mongoose = require("mongoose");
const { Schema } = mongoose;

const featureSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point", "Polygon", "MultiPolygon"],
    required: true
  },
  coordinates: {
    type: [[Array]],
    required: true
  }
});

const tippecanoeSchema = new mongoose.Schema({
  layer: String,
  minzoom: {
    type: Number,
    required: true
  },
  maxzoom: {
    type: Number,
    required: true
  }
});

const propertiesSchema = new mongoose.Schema({
  oid: String,
  color_2: String,
  title: String,
  tyid: String,
  bordercolor: String,
  borderopacity: Number,
  borderhoveropacity: Number,
  colorhoveropacity: Number,
  color: String,
  borderhovercolor: String,
  borderhoverwidth: Number,
  itemid_country: String,
  coloropacity: Number,
  way_json_envelope: String,
  centroid: String
});

const geojsonSchema = new Schema({
  type: String,
  year: String,
  tippecanoe: tippecanoeSchema,
  properties: propertiesSchema,
  geometry: featureSchema
});

mongoose.model("geojsons", geojsonSchema);

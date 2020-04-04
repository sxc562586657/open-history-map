import React, { useEffect } from "react";
import L from "leaflet";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "./FeatureEditor.css";

require("codemirror/mode/javascript/javascript");

const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
let map;
let features;
let geojson_editor_content = JSON.stringify(
  JSON.parse('{\n"type": "FeatureCollection",\n"features": []\n}'),
  null,
  "\t"
);
let code_editor;

function onChange(editor, data, value) {
  // Prevent infinite loop
  if (data.origin === "setValue") return;
  // if (JSON.stringify(JSON.parse(value)) === JSON.stringify(JSON.parse(editor.getValue()))) return;
  let geojson = this;
  try {
    geojson = JSON.parse(value);
  } catch (e) {
    console.log("Invalid GeoJSON!");
    return;
  }
  editor.setValue(JSON.stringify(JSON.parse(value), null, "\t"));
  // console.log("onChange: ", JSON.stringify(JSON.parse(value), null, "\t"));
  loadGeoJSONtoMap(geojson);
}

function pushToCodeEditor() {
  code_editor.setValue(JSON.stringify(features.toGeoJSON(), null, "\t"));
  // console.log(geojson_editor_content);
}

function loadGeoJSONtoMap(geojson) {
  features = L.geoJSON(geojson);
  features.addTo(map);
  features.on("pm:edit", pushToCodeEditor);
  if (geojson.features.length !== 0) map.fitBounds(features.getBounds());
}

function FeatureEditor() {
  useEffect(() => {
    map = L.map("feature-editor").setView([51.505, -0.09], 4);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessToken
      }
    ).addTo(map);
    map.pm.addControls({
      position: "topleft",
      drawCircle: false
    });
    map.pm.setGlobalOptions({ limitMarkersToCount: 60 });
  }, []);

  return (
    <div className="editor">
      <div id="feature-editor"></div>
      <div className="code-editor-container">
        <CodeMirror
          value={geojson_editor_content}
          options={{
            mode: "javascript",
            theme: "dracula",
            lineNumbers: true
          }}
          editorDidMount={editor => {
            code_editor = editor;
          }}
          onChange={onChange}
        />
        <div className="toolbar">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureEditor;

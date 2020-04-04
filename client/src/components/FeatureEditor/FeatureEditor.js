import React, { Component } from "react";
import L from "leaflet";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "./FeatureEditor.css";

require("codemirror/mode/javascript/javascript");

const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const backendUrl = process.env.REACT_APP_BACKEND_SERVER;
const geojson_editor_template = JSON.parse(
  '{"type": "FeatureCollection","features": []}'
);

class FeatureEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: 0,
      features: 0,
      code_editor: 0,
      json: JSON.parse('{"type": "FeatureCollection","features": []}')
    };
    this.loadGeoJSONtoMap = this.loadGeoJSONtoMap.bind(this);
    this.pushToCodeEditor = this.pushToCodeEditor.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  loadGeoJSONtoMap(geojson) {
    if (this.state.features !== 0)
      this.state.features.clearLayers(); 
    let features = L.geoJSON(geojson).addTo(this.state.map);
    features.on("pm:edit", this.pushToCodeEditor);
    if (geojson.features.length !== 0)
      this.state.map.fitBounds(features.getBounds());
    this.setState({features: features});

    // this.setState({ features: L.geoJSON(geojson) }, () => {
    //   this.state.features.addTo(this.state.map);
    //   this.state.features.on("pm:edit", this.pushToCodeEditor);
    //   if (geojson.features.length !== 0)
    //     this.state.map.fitBounds(this.state.features.getBounds());
    // });
  }

  pushToCodeEditor() {
    this.state.code_editor.setValue(
      JSON.stringify(this.state.features.toGeoJSON(), null, "\t")
    );
    // console.log(geojson_editor_content);
  }

  onChange(editor, data, value) {
    // Prevent infinite loop
    if (data.origin === "setValue") return;
    // if (JSON.stringify(JSON.parse(value)) === JSON.stringify(JSON.parse(editor.getValue()))) return;
    try {
      let current_json = JSON.parse(value);
      if (!current_json.features) {
        geojson_editor_template["features"] = [current_json];
      }
    } catch (e) {
      console.log("Invalid GeoJSON!");
      return;
    }
    editor.setValue(JSON.stringify(geojson_editor_template, null, "\t"));
    // console.log("onChange: ", JSON.stringify(JSON.parse(value), null, "\t"));
    // console.log(geojson_editor_template);
    this.loadGeoJSONtoMap(geojson_editor_template);
  }

  initMap() {
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
    ).addTo(this.state.map);
    this.state.map.pm.addControls({
      position: "topleft",
      drawCircle: false
    });
    this.state.map.pm.setGlobalOptions({ limitMarkersToCount: 60 });
    this.fetchData();
  }

  fetchData() {
    // console.log("fetchData");
    const {
      match: { params }
    } = this.props;
    fetch(backendUrl + "/api/geojson/id/" + params.id)
      .then(response => response.json())
      .then(data => {
        this.setState({ json: data });
        // console.log(this.state.json);
      })
      .catch(error => console.log(error) );
  }

  componentDidMount() {
    this.setState(
      { map: L.map("feature-editor").setView([51.505, -0.09], 4) },
      this.initMap
    );
  }

  render() {
    return (
      <div className="editor">
        <div id="feature-editor"></div>
        <div className="code-editor-container">
          <CodeMirror
            value={JSON.stringify(this.state.json, null, "\t")}
            options={{
              mode: "javascript",
              theme: "dracula",
              lineNumbers: true
            }}
            editorDidMount={editor => {
              this.setState({ code_editor: editor });
            }}
            onChange={this.onChange}
          />
          <div className="toolbar">
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureEditor;

import React, { useState } from "react";

import "./App.css";

import BaseMap from "../BaseMap/BaseMap";
import TimeSelector from "../TimeSelector/TimeSelector";

const TILESERVER_HOST = "http://localhost:3000";
const DEFAULT_YEAR = "AD1783";

function App() {
  const mapStyleTemplate =
    TILESERVER_HOST + "/styles/{year}/style.json";
  const [mapObject, setMapObject] = useState(0);
  const handleMapObjectChange = updatedMapObject => {
    setMapObject(updatedMapObject);
  };

  return (
    <div>
      <BaseMap
        defaultStyle={mapStyleTemplate.replace("{year}", DEFAULT_YEAR)}
        onMapObjectChange={handleMapObjectChange}
      />
      <TimeSelector
        styleTemplate={mapStyleTemplate}
        map={mapObject}
        onMapObjectChange={handleMapObjectChange}
      />
    </div>
  );
}

export default App;

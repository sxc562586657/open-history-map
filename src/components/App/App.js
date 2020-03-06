import React, { useState, useEffect } from "react";

import "./App.css";

import BaseMap from "../BaseMap/BaseMap";
import TimeSelector from "../TimeSelector/TimeSelector";

const TILESERVER_HOST = process.env.REACT_APP_TILESERVER_HOST;
const DEFAULT_YEAR = process.env.REACT_APP_DEFAULT_YEAR;

function App() {
  const mapStyleTemplate = TILESERVER_HOST + "/styles/{year}/style.json";
  const [mapObject, setMapObject] = useState(0);
  const [currentYear, setCurrentYear] = useState("Select Year");

  const handleMapObjectChange = updatedMapObject => {
    setMapObject(updatedMapObject);
  };

  useEffect(() => {
    if (mapObject !== 0) {
      mapObject.setStyle(mapStyleTemplate.replace("{year}", currentYear));
    }
    // eslint-disable-next-line
  }, [currentYear]);

  return (
    <div>
      <BaseMap
        defaultStyle={mapStyleTemplate.replace("{year}", DEFAULT_YEAR)}
        onMapObjectChange={handleMapObjectChange}
      />
      <TimeSelector
        currentYear={currentYear}
        onCurrentYearChange={setCurrentYear}
      />
    </div>
  );
}

export default App;

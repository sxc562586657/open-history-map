import React from "react";
import "./App.css";

import BaseMap from "../BaseMap/BaseMap";
import TimeSelector from "../TimeSelector/TimeSelector";

const TILESERVER_HOST = "http://localhost:3000";
const DEFAULT_YEAR = "AD1783";
const YEARS = [
  "BC3000",
  "BC2030",
  "BC1735",
  "BC1300",
  "BC1000",
  "BC800",
  "BC600",
  "BC570",
  "BC539",
  "BC490",
  "BC449",
  "BC400",
  "BC356",
  "BC330",
  "BC280",
  "BC260",
  "BC247",
  "BC221",
  "BC213",
  "BC206",
  "BC200",
  "BC168",
  "BC146",
  "BC121",
  "BC100",
  "BC60",
  "BC44",
  "BC33",
  "AD10",
  "AD23",
  "AD44",
  "AD74",
  "AD100",
  "AD117",
  "AD130",
  "AD150",
  "AD196",
  "AD225",
  "AD270",
  "AD300",
  "AD320",
  "AD350",
  "AD380",
  "AD400",
  "AD410",
  "AD450",
  "AD451",
  "AD476",
  "AD500",
  "AD527",
  "AD545",
  "AD560",
  "AD580",
  "AD600",
  "AD660",
  "AD680",
  "AD700",
  "AD750",
  "AD780",
  "AD814",
  "AD850",
  "AD875",
  "AD900",
  "AD910",
  "AD920",
  "AD940",
  "AD955",
  "AD980",
  "AD1000",
  "AD1040",
  "AD1080",
  "AD1100",
  "AD1127",
  "AD1170",
  "AD1200",
  "AD1235",
  "AD1300",
  "AD1350",
  "AD1400",
  "AD1500",
  "AD1599",
  "AD1783",
  "AD1812",
  "AD1825"
];

function App() {
  const defaultMapStyle =
    TILESERVER_HOST + "/styles/" + DEFAULT_YEAR + "/style.json";

  return (
    <div>
      <BaseMap defaultStyle={defaultMapStyle} />
      <TimeSelector years={YEARS} />
    </div>
  );
}

export default App;

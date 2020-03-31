import React from "react";

import "./TimeSelector.css";

const years = [
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

function TimeSelector(props) {
  const onChangeYear = e => {
    var selectedYear = e.currentTarget.textContent;
    selectedYear = selectedYear.slice(-2) + selectedYear.slice(0, -2);
    props.onCurrentYearChange(selectedYear);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" id="year-selection-button">
        {props.currentYear}
      </button>
      <div className="dropdown-content" id="years">
        <ul>
          {years.map(year => (
            <li className="normal-li cp" onClick={onChangeYear} key={year}>
              <span className="inline">{year.slice(2)}</span>
              <span className="ad-or-bc">{year.slice(0, 2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimeSelector;

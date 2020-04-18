import React from "react";

import "./TimeSelector.css";

let years = [];

function TimeSelector(props) {
  for (let i = -600; i <= 1500; i++) {
    years.push(i < 0 ? "BC" + -1 * i : "AD" + i)
  }
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

import React from "react";

import "./TimeSelector.css";

function TimeSelector(props) {
  var years = props.years;

  return (
    <div class="dropdown">
      <button class="dropbtn" id="year-selection-button">
        Select Year
      </button>
      <div class="dropdown-content" id="years">
        <ul>
          {years.map(year => (
            <li class="normal-li cp">
              <span class="inline">{year.slice(2)}</span>
              <span class="ad-or-bc">{year.slice(0, 2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimeSelector;

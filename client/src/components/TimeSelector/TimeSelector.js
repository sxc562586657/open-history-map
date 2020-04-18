import React, { useState } from "react";
import { convertNumTime2StrTime, convertStrTime2NumTime } from "../../util/convertTime"

import "./TimeSelector.css";

function TimeSelector(props) {
  let years = [];
  const [step, setStep] = useState(5);
  const [curYear, setCurYear] = useState("AD476");

  for (let i = -600; i <= 1500; i++) {
    years.push(i < 0 ? "BC" + -1 * i : "AD" + i)
  }

  const onChangeYear = e => {
    var selectedYear = e.currentTarget.textContent;
    selectedYear = selectedYear.slice(-2) + selectedYear.slice(0, -2);
    setCurYear(selectedYear);
    props.onCurrentYearChange(selectedYear);
  };

  const onStepChange = e => {
    if (e.currentTarget.value === '') {
      setStep('');
      return;
    }
    setStep(parseInt(e.currentTarget.value));
  }

  const onPrevClick = e => {
    if (convertStrTime2NumTime(curYear) - step < -600) return;
    let newCurYear = convertNumTime2StrTime(convertStrTime2NumTime(curYear) - step);
    setCurYear(newCurYear);
    props.onCurrentYearChange(newCurYear);
  }

  const onNextClick = e => {
    if (convertStrTime2NumTime(curYear) + step > 1500) return;
    let newCurYear = convertNumTime2StrTime(convertStrTime2NumTime(curYear) + step);
    setCurYear(newCurYear);
    props.onCurrentYearChange(newCurYear);
  }

  return (
    <div>
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
      <div className="yearjump">
        <button className="previous round" onClick={onPrevClick}>&#8249;</button>
        <input name="step" className="step-input" value={step} onChange={onStepChange} />
        <button className="next round" onClick={onNextClick}>&#8250;</button>
      </div>
    </div>
  );
}

export default TimeSelector;

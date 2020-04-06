import React, { useState, useEffect } from "react";
import FeatureListEntity from "../FeatureListEntity/FeatureListEntity";

import "./FeatureList.css";

const backendUrl = process.env.REACT_APP_BACKEND_SERVER;

function FeatureList() {
  const [featureList, setFeatureList] = useState([]);
  const [filterYear, setFilterYear] = useState("AD10");
  const [filterTitle, setFilterTitle] = useState("");

  useEffect(() => {
    fetch(backendUrl + "/api/geojson/")
      .then(response => response.json())
      .then(data => {
        setFeatureList(data);
      })
      .catch(error => console.log(error));
  }, []);
  const featureEntities = featureList
    .filter(feature => filterYear === "" || feature.year === filterYear)
    .filter(
      feature =>
        filterTitle === "" || feature.properties.title.includes(filterTitle)
    )
    .map(feature => <FeatureListEntity key={feature._id} feature={feature} />);

  const handleYearFilterChange = e => {
    setFilterYear(e.target.value);
  };

  const handleTitleFilterChange = e => {
    setFilterTitle(e.target.value);
  };

  return (
    <div className="feature-list">
      <div className="feature-list-filter-container">
        <div>
          <label for="year-filter">Year: </label>
          <input
            id="year-filter"
            type="text"
            value={filterYear}
            onChange={handleYearFilterChange}
          ></input>
        </div>

        <div>
          <label for="title-filter">Title </label>
          <input
            id="title-filter"
            type="text"
            value={filterTitle}
            onChange={handleTitleFilterChange}
          ></input>
        </div>
      </div>
      <div className="feature-list-container">{featureEntities}</div>
    </div>
  );
}

export default FeatureList;

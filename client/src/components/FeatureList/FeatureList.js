import React, { useState, useEffect } from "react";
import FeatureListEntity from "../FeatureListEntity/FeatureListEntity";

import "./FeatureList.css";

function FeatureList() {
  const [featureList, setFeatureList] = useState([]);
  const [filterYear, setFilterYear] = useState("AD10");
  const [filterTitle, setFilterTitle] = useState("");

  useEffect(() => {
    fetch("/api/geojson/" + filterYear)
      .then(response => response.json())
      .then(data => {
        setFeatureList(data);
      })
      .catch(error => console.log(error));
  }, [filterYear]);
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
          <label htmlFor="year-filter">Year: </label>
          <input
            id="year-filter"
            type="text"
            value={filterYear}
            onChange={handleYearFilterChange}
          ></input>
        </div>

        <div>
          <label htmlFor="title-filter">Title </label>
          <input
            id="title-filter"
            type="text"
            value={filterTitle}
            onChange={handleTitleFilterChange}
          ></input>
        </div>
      </div>
      <div className="feature-list-container">
        <FeatureListEntity key={"create-button"} feature={null} />
        {featureEntities}
      </div>
    </div>
  );
}

export default FeatureList;

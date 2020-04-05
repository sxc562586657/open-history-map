import React, { useState, useEffect } from "react";
import FeatureListEntity from "../FeatureListEntity/FeatureListEntity"

import "./FeatureList.css"

const backendUrl = process.env.REACT_APP_BACKEND_SERVER;

function FeatureList() {
  const [featureList, setFeatureList] = useState([]);

  useEffect(() => {
    fetch(backendUrl + "/api/geojson/")
      .then(response => response.json())
      .then(data => {
        setFeatureList(data);
      })
      .catch(error => console.log(error));
  }, []);
  const featureIDs = featureList.map(feature => (
    <FeatureListEntity key={ feature._id } feature={ feature } />
  ));

  return <div className="feature-list-container">{featureIDs}</div>;
}

export default FeatureList;

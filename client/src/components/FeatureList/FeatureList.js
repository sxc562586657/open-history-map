import React, { useState, useEffect } from "react";
import FeatureListEntity from "../FeatureListEntity/FeatureListEntity"

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
    <FeatureListEntity feature={ feature } />
  ));

  return <div>{featureIDs}</div>;
}

export default FeatureList;

import React from "react";
import { Link } from "react-router-dom";

import "./FeatureListEntity.css";

function FeatureListEntity(props) {
  let featureID = props.feature ? props.feature._id : "";
  let featureYear = props.feature ? props.feature.year : "?";
  let featureTitle = props.feature ? props.feature.properties.title : "+CREATE";
  return (
    <div className="feature-card-container">
      <div className="feature-card-title">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"feature-editor/" + featureID}
        >
          {featureTitle}
        </Link>
      </div>
      <div className="feature-card-year">{featureYear}</div>
    </div>
  );
}

export default FeatureListEntity;

import React from "react";
import { Link } from "react-router-dom";

import "./FeatureListEntity.css";

function FeatureListEntity(props) {
  const featureID = props.feature._id;
  const featureYear = props.feature.year;
  const featureTitle = props.feature.properties.title;
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

import React from "react";
import { Link } from "react-router-dom";

function FeatureListEntity(props) {
  const featureID = props.feature._id;
  const featureYear = props.feature.year;
  const featureTitle = props.feature.properties.title;
  return (
    <div>
      <Link to={"feature-editor/" + featureID}>{featureYear}-----------{featureTitle}</Link>
    </div>
  );
}

export default FeatureListEntity;

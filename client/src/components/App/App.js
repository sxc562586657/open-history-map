import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import MapPage from "../MapPage/MapPage"
import FeatureEditor from "../FeatureEditor/FeatureEditor"
import FeatureList from "../FeatureList/FeatureList"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/map">
          <MapPage />
        </Route>
        <Route path="/feature-editor">
          <FeatureEditor />
        </Route>
        <Route path="/feature-list">
          <FeatureList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./BaseMap.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class BaseMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.props.defaultStyle,
      minZoom: 2,
      maxZoom: 8
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl());
    this.props.onMapObjectChange(map);
  }

  render() {
    return (
      <div ref={el => (this.mapContainer = el)} className="mapContainer" />
    );
  }
}

export default BaseMap;

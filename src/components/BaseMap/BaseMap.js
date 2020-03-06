import React from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./BaseMap.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3hjNTYyNTg2NjU3IiwiYSI6ImNrNnZ4ZnVoMzA2c2kzbHJ4cmhxdzZ5ZWMifQ.NYqrc2_6uudQZgPnSTf1ZQ";

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
      style: "http://localhost:3000/styles/AD1783/style.json",
      minZoom: 2,
      maxZoom: 10
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl());
  }

  render() {
    return (
      <div ref={el => (this.mapContainer = el)} className="mapContainer" />
    );
  }
}

export default BaseMap;

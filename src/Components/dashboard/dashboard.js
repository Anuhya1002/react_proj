import mapboxgl from "mapbox-gl";
import React, { Component } from "react";
import "./dashboard.css";

import "mapbox-gl/dist/mapbox-gl.css"
import { useNavigate } from "react-router-dom";

mapboxgl.accessToken =
  "pk.eyJ1IjoieWFzaW41NDk5MCIsImEiOiJjbGM3dnptNmYwM3JvM3BvMjVhYWxzZHB2In0.PAWijz529Uqet82VLTKPHA";



export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -70.9,
      lat: 42.35,
      zoom: 10,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/yasin54990/clc7wy1g9001k14s08089ybkt",
      center: [lng, lat],
      zoom: zoom,
    });
  }

  logout() {
    alert("logout");
    let navigate = useNavigate();
    navigate("/login")
  }



  render() {
    return (
      <div className="mainframe">
        <div className="flex-row center-aligned space-between full-height">
          <div className="flex-item sidemenu flex-column">
            <h2 className="h2">Dashboard</h2>
            <div>
              <p className="sideMenuItem active">Overview</p>
              <p className="sideMenuItem">Inbox</p>
              <p className="sideMenuItem">Analytics</p>
              <p className="sideMenuItem">Contacts</p>
              <p className="sideMenuItem">Reports</p>
              <p className="sideMenuItem">Profile</p>
              <p className="sideMenuItem">Releases</p>
            </div>

            <button onClick={this.logout}  className="button primary">Logout</button>
          </div>
          <div className="flex-item maincontent full-height">
            <div className="flex-column gap">
              <div className="flex-row space-between navbar p-lr p-ub">
                <h2>Good Morning, Williams</h2>
                <div className="flex-row center-aligned gap">
                  <button className="button primary outline">
                    Upgrade now
                  </button>
                  <div className="avatar"></div>
                </div>
              </div>
              <div className="flex-row space-between p-lr">
                <div className="borderbox flex-column p-lr">
                  <h4>users</h4>
                  <h1 className="h1">20.3K</h1>
                  <h4>
                    <span className="label green">12%</span> vs last Month
                  </h4>
                </div>
                <div className="borderbox flex-column p-lr">
                  <h4>sessions</h4>
                  <h1 className="h1">283.5K</h1>
                  <h4>
                    <span className="label red">32%</span> vs last Month
                  </h4>
                </div>
                <div className="borderbox flex-column p-lr">
                  <h4>spend times</h4>
                  <h1 className="h1">34m 52s</h1>
                  <h4>
                    <span className="label green">52%</span> vs last Month
                  </h4>
                </div>
                <div className="borderbox flex-column p-lr">
                  <h4>Visits</h4>
                  <h1 className="h1">152k</h1>
                  <h4>
                    <span className="label green">88%</span> vs last Month
                  </h4>
                </div>
              </div>

              <div className="p-lr p-ub">
                <div>
                  <div ref={this.mapContainer} className="map-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

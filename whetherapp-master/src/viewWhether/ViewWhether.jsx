import React from "react";
import "./viewWhether.scss";

import {
  ArrowBack,
  Close,
  LocationCity,
  LocationOn,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
export const ViewWhether = () => {
  const location = useLocation();
  const country = new URLSearchParams(location.search).get("name");
  const name = new URLSearchParams(location.search).get("city");
  const temperature = new URLSearchParams(location.search).get("temperature");
  const temperaturemax = new URLSearchParams(location.search).get(
    "temperaturemax"
  );
  const temperaturemin = new URLSearchParams(location.search).get(
    "temperaturemin"
  );
  console.log(name);
  return (
    <div className="dashboardWrapper">
      <div className="head-text">
        <div className="head-image">
          <img src="./assets/Headerbg.png" alt="Freedom Blog" />
        </div>
        <div className="text-on-image">
          <div className="whetherNextCards">
            <div className="whetherCard">
              <div className="clouds"></div>
              <div className="CloseIcon">
                {" "}
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ArrowBack></ArrowBack>{" "}
                </Link>
              </div>
              <div className="topDiv">
                <div className="top">
                  {" "}
                  <h1>
                    {name},{country}
                  </h1>
                  <span>9.30 am feb 8</span>
                </div>
              </div>
              <div className="topBottom">
                <div className="topBottomContent">
                  {" "}
                  <span>Few Clouds</span>
                </div>
                <div class="vl"></div>
                <div className="topBottomContent">
                  {" "}
                  <h1>{temperature}°C</h1>
                  <span>Temp min : {temperaturemin}°C</span>
                  <span>Temp max : {temperaturemax}°C</span>
                </div>
              </div>
              <div className="bottomDiv">
                <div className="phv">
                  <span>Pressure:1018hPa</span>
                  <span>Humidity:78%</span>
                  <span>Visibility:8.0km</span>
                </div>
                <div class="vl"></div>
                <div className="phv">
                  <img src="./assets/location.png" alt="" />
                  <span>Visibility:8.0km</span>
                </div>
                <div class="vl"></div>
                <div className="phv">
                  <span>Sunrise : 6:05 a.m</span>
                  <span>Sunset : 6:05 a.m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./dashboard.scss";

import {
  Close,
  LocationCity,
  LocationOn,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";

const initialCities = {
  List: [
    {
      CityCode: "1248991",
      CityName: "Colombo",
      Temp: "33.0",
      Status: "Clouds",
      icon:"10n"
    },
    {
      CityCode: "1850147",
      CityName: "Tokyo",
      Temp: "8.6",
      Status: "Clear",
    },
    {
      CityCode: "2644210",
      CityName: "Liverpool",
      Temp: "16.5",
      Status: "Rain",
    },
    {
      CityCode: "2988507",
      CityName: "Paris",
      Temp: "22.4",
      Status: "Clear",
    },
    {
      CityCode: "2147714",
      CityName: "Sydney",
      Temp: "27.3",
      Status: "Rain",
    },
    {
      CityCode: "4930956",
      CityName: "Boston",
      Temp: "4.2",
      Status: "Mist",
    },
    {
      CityCode: "1796236",
      CityName: "Shanghai",
      Temp: "10.1",
      Status: "Clouds",
    },
    {
      CityCode: "3143244",
      CityName: "Oslo",
      Temp: "-3.9",
      Status: "Clear",
    },
  ],
};

export const Dashboard = () => {
  const [cities, setCities] = useState([]);
  console.log(cities);
  const handleAddCity = () => {
    const cityInput = document.querySelector("#cityInput");
    const cityName = cityInput.value.trim();
    if (!cityName) return;
    console.log(cityName);
    // make API call to fetch city data
    const apiKey = "183b3d4d8682b5e0f80ad4679e89e586";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        const { name, sys, main, weather, wind, visibility } = response.data;
        const city = {
          name: name,
          country: sys.country,
          temperature: main.temp,
          temperaturemin: main.temp_min,
          temperaturemax: main.temp_max,
          pressure: main.pressure,
          humidity: main.humidity,
          visibility: visibility,
          speed: wind.speed,
          sunrise: sys.sunrise,
          sunset: sys.sunset,
          status: weather[0].main,
          icon :weather[0].icon ,
        };
        setCities((prevCities) => [...prevCities, city]);
      })
      .catch((error) => {
        console.error("Error fetching city data:", error);
      });
    // reset input field
    cityInput.value = "";
  };
  console.log(cities);
  const handleRemoveCity = (cityIndex) => {
    setCities((prevCities) =>
      prevCities.filter((_, index) => index !== cityIndex)
    );
  };
  return (
    <div className="dashboardWrapper">
      <div className="head-text">
        <div className="head-image">
          <img src="./assets/Headerbg.png" alt="Freedom Blog" />
        </div>
        <div className="text-on-image">
          <div className="logo-on-image">
            <img src="./assets/logo.png" alt="" />
            <h3> Whether App</h3>
          </div>
          <div className="input-on-image">
            <input type="text" id="cityInput"></input>
            <button onClick={handleAddCity}>Add City</button>
          </div>
          <div className="whetherCardsWrapperDiv">
            <div className="whetherCardsWrapper">
              {cities.map((city, index) => (
                <div key={index} className="whetherCards">
                  <div className="whetherCard">
                    <div className="clouds">
                      {" "}
                      <img src="./assets/cloud.png" alt="" />
                    </div>
                    <div className="CloseIcon">
                      <Link onClick={handleRemoveCity}>
                        <Close></Close>
                      </Link>
                    </div>
                    <Link
                      to={`/viewWeather?name=${city.country}&city=${city.name}&temperature=${city.temperature}&temperaturemin=${city.temperaturemin}&temperaturemax=${city.temperaturemax}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div className="topDiv">
                        <div className="topLeft">
                          {" "}
                          <h1>
                            {" "}
                            {city.name}, {city.country}
                          </h1>
                          <span>9.30 am feb 8</span>
                          <h4>Few Clouds</h4>
                        </div>
                        <div className="topRight">
                          {" "}
                          <h1>{city.temperature}</h1>
                          <span>Temp min : {city.temperaturemax}°C</span>
                          <span>Temp max : {city.temperaturemin}°C</span>
                        </div>
                      </div>

                      <div className="bottomDiv">
                        <div className="phv">
                          <span>Pressure:{city.pressure}hPa</span>
                          <span>Humidity:{city.humidity}%</span>
                          <span>Visibility:{city.visibility}km</span>
                        </div>
                        <div class="vl"></div>

                        <div className="phv">
                          <img src="./assets/location.png" alt="" />
                          <span>{city.speed}ms Degree</span>
                        </div>
                        <div class="vl"></div>

                        <div className="phv">
                          <span>Sunrise : {city.sunrise} a.m</span>
                          <span>Sunset : {city.sunset} a.m</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

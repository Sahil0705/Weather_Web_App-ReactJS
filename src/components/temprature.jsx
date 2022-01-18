import React, { useState, useEffect } from "react";
import Weathercard from "./weather_card";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Mumbai");
  const [tempInfo, setTempInfo] = useState({});
  let msg="";
  const getWeatherInfo = async () => {
    try {
      
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ede44d7b6f9e388706d65d398c99e893`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure,feels_like } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed,deg } = data.wind;
      const { country, sunset, sunrise } = data.sys;
      const visibility = data.visibility;
      

      const myNewWeatherInfo = {
        temp:temp,
        humidity:humidity,
        pressure:pressure,
        weathermood:weathermood,
        name:name,
        speed:speed,
        country:country,
        sunset:sunset,
        sunrise:sunrise,
        visibility:visibility,
        feels_like:feels_like,
        deg:deg,
        msg:msg
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      msg="Enter a proper city name to get the Weather";
    //   console.log(msg);
    //   console.log(error);
    const myNewWeatherInfo = {
        temp:"",
        humidity:"",
        pressure:"",
        weathermood:"",
        name:"",
        speed:"",
        country:"",
        sunset:"",
        sunrise:"",
        visibility:"",
        feels_like:"",
        deg:"",
        msg:msg
      };
      setTempInfo(myNewWeatherInfo);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [searchValue]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search for any city..."
            autoComplete="off"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      

      {/* our temp card  */}
      <Weathercard {...tempInfo}/>
    </>
  );
};

export default Temp;
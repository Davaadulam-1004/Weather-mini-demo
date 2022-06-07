import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./component/Cards/cards";
import Details from "./component/Details/details";
import LeftTitle from "./component/LeftTitle/left";
import RightTitle from "./component/RightTitle/right";
import Temperature from "./component/Temperature/temp";
import Weather from "./component/Weekdays/week";
import { CITY_WEATHERS } from "./constants";
import { CityWeather } from "./types";



const App = () => {

  // const date = new Date();
  // console.log(date.getMonth() + 1);
  const [selectedCityWeather, setSelectedCityWeather] = useState<CityWeather>(CITY_WEATHERS[0]);
  const handleSelectedCity = (cityId: string): void => {
    CITY_WEATHERS.forEach( cityWeather => {
      if(cityWeather.city.id === cityId) {
        setSelectedCityWeather(cityWeather);
      }
  })
  }

  useEffect(() => {
    
  }, [selectedCityWeather])
  return (
    <div className="container">
      <div className="left">
        <LeftTitle />
           <Cards selectCity = {handleSelectedCity}/>
        <Weather data={selectedCityWeather.weather}/>
      </div>
      <div className="right">
        <RightTitle />
        <Temperature data={selectedCityWeather.weather} />
        <Details />
      </div>
    </div>
    
  );
}

export default App;

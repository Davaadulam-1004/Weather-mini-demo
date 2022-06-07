import { FunctionComponent } from "react";
import { UB_WEATHER as WEATHERS } from "../../constants";
import { WeatherModel } from "../../types";
import "./index.css";


interface WeekdayModel {
  data: WeatherModel[];
}
const Weather: FunctionComponent<WeekdayModel> = ({data}) => {
  return (
      <div className="week">
          {
              data.map((weather) => (
                  <div>
                    <div className="forecast">
                      <div className="weekday">{weather.weekday}</div>
                      <div className="temp">{weather.temp + "°C"}</div>
                      <div className="humidity">{weather.humidity + "%"}</div>
                      <div className="precipitation">{weather.precipitation}</div>
                    </div>
                  </div> 
              ))
          }
      </div>
  )
}

export default Weather;
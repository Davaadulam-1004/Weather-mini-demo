import "./index.css";
import { FunctionComponent, useEffect, useState } from "react";
import rain from './rain.png'
import cloud from './cloud.png'
import cloudy from './cloudy.png'
import sun from './sun.png'
import { WeatherModel } from "../../types";


interface WeekdayModel {
    data: WeatherModel[];
}



const Temperature: FunctionComponent<WeekdayModel> = ({ data }) => {

    const [selectedCityWeather, setSelectedCityWeather] = useState<WeatherModel>();



    useEffect(() => {
        let date = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dayName = days[date.getDay()];
        let todayData = data.find(i => i.weekday == dayName);
        setSelectedCityWeather(todayData);
    })

    const renderSwitch = (param: any) => {
        switch (param) {
            case 'SNOW':
                return <img src={rain} width="60" alt="rain" />;
            case 'RAIN':
                return <img src={sun} width="60" alt="rain" />;
            case 'HAIL':
                return <img src={cloudy} width="60" alt="hail" />;
            case 'NORMAL':
                return <img src={cloud} width="60" alt="cloud" />;
        }
    }


    return (
        <div className="grds">
            <div className="grid-temp">
                <div className="temp1">
                    
                    {renderSwitch(selectedCityWeather?.precipitation)}                    
                </div>
                <div className="temp2">Today</div>
                <div className="temp3">{selectedCityWeather?.weekday}  {new Date().getDate()}</div>
            </div>
            <div className="gradus">{selectedCityWeather?.temp + "°C"}</div>
        </div>
    )
}

export default Temperature;
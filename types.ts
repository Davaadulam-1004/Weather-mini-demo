export enum Precipitation {
    RAIN = 'RAIN',
    SNOW = 'SNOW',
    HAIL = 'HAIL',
    NORMAL = 'NORMAL'
  };
  
  export interface City {
    id: string;
    name: string;
    img: string;
  }
  
  export  interface CityWeather {
    city: City
    weather: WeatherModel[];
  }
  
  export interface WeatherModel {
    weekday: string;
    temp: number;
    humidity: number;
    precipitation: Precipitation;
  }
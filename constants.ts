import { City, CityWeather, Precipitation, WeatherModel } from "./types";

export const UB_WEATHER: WeatherModel[] = [{
    weekday: 'Monday',
    temp: 20,
    humidity: 81,
    precipitation: Precipitation.HAIL
  }, 
  {
    weekday: 'Tuesday',
    temp: 28,
    humidity: 82,
    precipitation: Precipitation.RAIN
  },
  {
    weekday: 'Wednesday',
    temp: 15,
    humidity: 83,
    precipitation: Precipitation.SNOW
  },
  {
    weekday: 'Thursday',
    temp: 21,
    humidity: 84,
    precipitation: Precipitation.RAIN
  },
  {
    weekday: 'Friday',
    temp: 20,
    humidity: 85,
    precipitation: Precipitation.NORMAL
  },
  {
    weekday: 'Sunday',
    temp: 29,
    humidity: 86,
    precipitation: Precipitation.SNOW
  },
  {
    weekday: 'Saturday',
    temp: 30,
    humidity: 87,
    precipitation: Precipitation.HAIL
  }];
  export const INDONESIA_WEATHER: WeatherModel[] = [{
    weekday: 'Monday',
    temp: 20,
    humidity: 88,
    precipitation: Precipitation.HAIL
  }, 
  {
    weekday: 'Tuesday',
    temp: 28,
    humidity: 81,
    precipitation: Precipitation.RAIN
  },
  {
    weekday: 'Wednesday',
    temp: 23,
    humidity: 82,
    precipitation: Precipitation.HAIL
  },
  {
    weekday: 'Thursday',
    temp: 21,
    humidity: 83,
    precipitation: Precipitation.SNOW
  },
  {
    weekday: 'Friday',
    temp: 31,
    humidity: 84,
    precipitation: Precipitation.RAIN
  },
  {
    weekday: 'Sunday',
    temp: 29,
    humidity: 85,
    precipitation: Precipitation.SNOW
  },
  {
    weekday: 'Saturday',
    temp: 30,
    humidity: 86,
    precipitation: Precipitation.HAIL
  }];
  export const SINGAPOUR_WEATHER: WeatherModel[] = [{
    weekday: 'Monday',
    temp: 20,
    humidity: 80,
    precipitation: Precipitation.HAIL
  }, 
  {
    weekday: 'Tuesday',
    temp: 28,
    humidity: 81,
    precipitation: Precipitation.RAIN
  },
  {
    weekday: 'Wednesday',
    temp: 11,
    humidity: 82,
    precipitation: Precipitation.NORMAL
  },
  {
    weekday: 'Thursday',
    temp: 21,
    humidity: 83,
    precipitation: Precipitation.HAIL
  },
  {
    weekday: 'Friday',
    temp: 30,
    humidity: 82,
    precipitation: Precipitation.SNOW
  },
  {
    weekday: 'Sunday',
    temp: 29,
    humidity: 86,
    precipitation: Precipitation.SNOW
  },
  {
    weekday: 'Saturday',
    temp: 30,
    humidity: 85,
    precipitation: Precipitation.HAIL
  }];
  export const NETHERLAND_WEATHER: WeatherModel[] = [{
    weekday: 'Monday',
    temp: 20,
    humidity: 81,
    precipitation: Precipitation.HAIL
  }, 
  {
    weekday: 'Tuesday',
    temp: 28,
    humidity: 83,
    precipitation: Precipitation.RAIN
  },
  {
    weekday: 'Wednesday',
    temp: 24,
    humidity: 83,
    precipitation: Precipitation.SNOW
  },
  {
    weekday: 'Thursday',
    temp: 11,
    humidity: 80,
    precipitation: Precipitation.NORMAL
  },
  {
    weekday: 'Friday',
    temp: 25,
    humidity: 82,
    precipitation: Precipitation.HAIL
  },
  {
    weekday: 'Sunday',
    temp: 29,
    humidity: 81,
    precipitation: Precipitation.SNOW
  },
  {
    weekday: 'Saturday',
    temp: 30,
    humidity: 85,
    precipitation: Precipitation.HAIL
  }];
 export const CITY: City[] = [
  {
    id: '1',
    name: "Ulaanbaatar",
    img:"https://thumbs.dreamstime.com/b/atlanta-georgia-usa-downtown-skyline-atlanta-georgia-usa-110765393.jpg"
  },
    {
        id: '2',
        name: "Indonesia",
        img:"https://th.bing.com/th/id/R.c66190f1d8fc950aeaf1c11cdd37375e?rik=Dwv36aKAXM6Stw&pid=ImgRaw&r=0"
    },
    {
        id: "3",
        name: "Singapour",
        img:"https://th.bing.com/th/id/OIP.RiXFnv9F4vA0skUcjddkrwHaFw?pid=ImgDet&rs=1"
    },
    {
        id: '4',
        name: "Netherland",
        img:"https://th.bing.com/th/id/OIP.1C1pfhIaFohYUfuGXWOc0AHaEK?pid=ImgDet&rs=1"
    }
]

export const CITY_WEATHERS: CityWeather[] = [
  {
    city: CITY[0],
    weather: UB_WEATHER
  },
  {
    city: CITY[1],
    weather: INDONESIA_WEATHER
  },
  {
    city: CITY[2],
    weather: SINGAPOUR_WEATHER
  },
  {
    city: CITY[3],
    weather: NETHERLAND_WEATHER
  }
]


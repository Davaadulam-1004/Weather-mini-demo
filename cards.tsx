import { CITY as CITIES, CITY } from "../../constants";
import Card from "../Card/card";
import "./style.css";
import { FunctionComponent } from 'react'

interface CardsProp {
    selectCity: (cityId: string) => void; 
}
const Cards: FunctionComponent<CardsProp> = ({selectCity}) => {

  
   const handleSelectCity = (city: string): void => {
    selectCity(city);
    }
    return (
        <div className="cards">
            {
               <Card cities={CITIES} onSelectCity = {handleSelectCity}></Card>
            }

        </div>
    )
}

export default Cards;
import React, { FunctionComponent } from 'react';
import { City } from '../../types';
import "./card.css";

interface CardProps { 
    cities: City[],
    onSelectCity: (id: string) => void 
}

const Card: FunctionComponent<CardProps> = ({cities, onSelectCity}) => {
    const handleSelect = (city: string) => {
        onSelectCity(city);
    }
    return (
        <>
        {
        cities.map((city) => (
            // <Card  setA={setA} img={city.img} cityName={city.name}></Card>
            <div className="card" onClick={() => handleSelect(city.id)}>
                <span className='card-name'>{city.name}</span>
                <img className="card" src={city.img} alt="" width="100%" height="200" />
                 {/* <Card></Card> */}
            </div>
        ))
        }
        </>
    )
}

export default Card;
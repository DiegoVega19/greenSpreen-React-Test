import React from 'react'
import "../Styles/cardsComponent.css"
import { Heart } from 'react-ionicons'

const CardsComponent = (props) => {
    return (
        <div className='card-container'>
        <div className='card-divider'>
        <img className='cardH-img' src="https://www.themealdb.com/images/media/meals/1550441882.jpg" alt="meal" />
            <p className='cardH-text'>{props.mealName}</p>
            <div className='heart-divider'>
            <span>
            <Heart className='heart' color={'#2067F8'} height="40px"
            width="40px"></Heart>
            </span>
            
            </div>
        </div> 
        </div>
    )
}

export default CardsComponent

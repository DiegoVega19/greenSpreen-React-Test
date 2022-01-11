import React from 'react'
import CardsComponent from '../components/CardsComponent'
import FooterComponent from '../components/FooterComponent'
import "../Styles/history.css"


const History = () => {
    return (
        <div className='favorite-container'>
            <span>
            <h2 className='favorite-title'>Favorite Meals</h2>
            <p className='favorite-subtitle'>Drag and Drop to Groups your Meals</p>    
            </span>
         <CardsComponent mealName="Potato"></CardsComponent>   
         <CardsComponent mealName="Arroz"></CardsComponent> 
         <CardsComponent mealName="Queso"></CardsComponent> 
         
         <FooterComponent></FooterComponent>
        </div>
    )
}

export default History

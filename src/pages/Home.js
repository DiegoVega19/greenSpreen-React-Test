import React from 'react'
import "../Styles/homestyles.css"
import { Close, Heart } from 'react-ionicons'
import FooterComponent from '../components/FooterComponent'


const Home = () => {
    return (
        <div>
        <div className='home-container'>
            <div className='card-area'>
                <img className='img' src="https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg" alt=""  />
                <h2 className='title-card'>Cake</h2>
                <div className='buton-container'>
                <button className={'rounded-button blueb'}>
                    <Heart color={'#ffffff'} />
                </button>
                <button  className={'rounded-button whiteb'}>
                    <Close color={'#D36060'} />
                </button>
                </div>
                
            </div>
           
        </div>
        <FooterComponent></FooterComponent>
        </div>
        
        
    )
}

export default Home

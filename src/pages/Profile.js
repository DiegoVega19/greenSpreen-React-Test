import React from 'react'
import { Moon,Sunny } from 'react-ionicons'
import FooterComponent from '../components/FooterComponent'

const Profile = () => {
    return (
        <div>
        <div className='home-container'>
            <div className='card-area'>
                <img className='img' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
                <h2 className='title-card'>Carl Cj Johnson</h2>
                <div className='buton-container'>
                <button className={'rounded-button blueb'}>
                    <Moon color={'#ffffff'} />
                </button>
                <button  className={'rounded-button whiteb'}>
                    <Sunny color={'#D36060'} />
                </button>
                </div>
                
            </div>
           
        </div>
        <FooterComponent></FooterComponent>
        </div>
    )
}

export default Profile

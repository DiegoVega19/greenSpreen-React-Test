import React from 'react'
import '../Styles/landingStyles.css'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/login")
    }
    return (
        <div className='row-container'>
            <div className='text-divider'>
            <span>
           
            <h2 className='title' >Discover Your Best Meals With Us</h2>
            <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            <button
            onClick={handleClick}
             className='login-button'>
                 <span>Login</span>
             </button>
            </span>
            </div>
            <div className='img-divider'>
                <img className='sport-img' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='meal' />
            </div>
        </div>
    )
}

export default Landing

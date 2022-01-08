import React from 'react'
import "../Styles/footerstyles.css"
import { Home, Star, Clipboard, Person } from 'react-ionicons'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
    return (
        <footer className='fixed-footer'>
            <div className='container'>
            <div className='icon-group'>
                <Link to="/home">
                <button className='rounded-link'>
                <Home color={'#1A5BE1'} ></Home>     
                </button>
                </Link>
                <Link to="/history">
                <button className='rounded-link'>
                <Star color={'#918888'} ></Star>
                </button> 
                </Link>
                <button className='rounded-link' onClick={()=>{ alert("Soon!") }}>
                <Clipboard color={'#918888'} ></Clipboard>
                </button>
                <Link to="/profile">
                <button className='rounded-link'>
                <Person color={'#918888'} ></Person>
                </button>
                </Link>
            </div>
        </div>  
        </footer>
        
    )
}

export default FooterComponent

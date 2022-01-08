import React, {useState} from 'react'
import '../Styles/loginStyles.css'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/home")
    }
    const handleSubmit = (e) =>{
            e.preventDefault()
      if(email==="")
      {
          alert("Email obligatorio")  
      }
      if(password==="")
      {
          alert("Password Obligatorio")
      }
      else{
          login()
          
      }      
    }
    const login = async () =>{
            try {
               const user = await signInWithEmailAndPassword(auth,email,password)
               console.log(user)
               navigate("/home")
            } catch (error) {
                console.log(error.message)
                alert("Credenciales incorrectas")
            }
    }
    return (
        <div >
            <div className='login-container'>
                <div className='login-area'>
                <h2 className='title'>Welcome to Green Spreen</h2>
                <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <input onChange={(event)=>{setEmail(event.target.value)}} type='email' id='email' className='input' type="text" placeholder='User' />
                <input onChange={(event)=>{setPassword(event.target.value)}} type='password' id='password' className='input' type="text" placeholder='Password'  />
                <p className='forgot'>Forgot your password</p>
                <button onClick={handleSubmit} type='submit' className='buton-login'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login

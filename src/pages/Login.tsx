import { useState } from 'react'
import logo from '../assets/gamers-guild-1.png';
import Cookies from 'js-cookie';
import CookieConsent from 'react-cookie-consent';
import { useStateContext } from '../context/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '../helper';

const Login = () => {
  const navigate = useNavigate();
  const { authenticate, setAuthenticate, setToken } = useStateContext();
  // if data is within the global state 'authenticate', populate the email and password in the 
  // local state.
  const [data, setData] = useState({
    username: Object.keys(authenticate).length < 1 ? "" : authenticate.username,
    password: Object.keys(authenticate).length < 1 ? "" : authenticate.password,
    isAuthenticated: false,
  })

  const mutation = useMutation<any, Error, any>(login => {
    return postLogin(login)
  })

  const handleChange = (e:any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  // Once logged in is submitted, toggle the authentication status to true
  const updateAuthenticate = () => {
    setData({
      ...data,
      isAuthenticated: true
    })
  }

  const userSession = (user:any, token:string) => {
    console.log("thi", token)
    setAuthenticate({...user, isAuthenticated: data.isAuthenticated})
    setToken(token)
    Cookies.set('token', JSON.stringify(token), { expires: 1 })
    Cookies.set('auth', JSON.stringify({
      ...user, isAuthenticated: data.isAuthenticated
    }), { expires: 1 })
    navigate("/me");
    console.log("that", user)
  }

  // store data in global state and browser cookies
  const handleSubmit = (e:any) => {
    e.preventDefault();
    mutation.mutate({
      username: data.username,
      password: data.password
    },
    {
      onSuccess: (res) => {userSession(res?.data.data.user, res?.data.data.token)},
    })
  }
  return (
    <main className='lg:my-10 md:my-8 flex justify-center items-center min-h-screen' >
      {/* Get user consent on usage of cookies to store personal data */}
      <CookieConsent
        location='bottom'
        buttonText="Accept"
        style={{ background: "#208607" }}
        buttonStyle={{color:"#000", background:"#fff"}}
        expires={150}
      >
        This website uses cookies to enhance the user experience. {" "}
      </CookieConsent>
      <div 
      className='md:border border-neutral rounded-lg lg:py-10 md:w-[462px] md:px-8 px-4
      lg:px-14 lg:w-[520px] md:py-10 py-8' 
    >
        <div className='flex items-center justify-center' >
          <Link to="/" >
            <img src={logo} alt='logo' className='w-20 h-16 mb-8' />
          </Link>
        </div>
        <h2 className='text-center mb-6 font-bold text-2xl' >Log in to your account</h2>
        <form onSubmit={handleSubmit} >
          <div className='mb-4' >
            <label className='lg:text-xl font-semibold mb-2' >Username</label>
            <input 
              name="username"
              type="text"
              className='focus:outline focus:outline-site-primary focus:border-site-primary 
              h-[50px] w-full rounded pl-4 border border-neutral'
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4' >
            <label className='lg:text-xl font-semibold mb-2' >Password</label>
            <input 
              name="password"
              type="password"
              className='focus:outline focus:outline-site-primary focus:border-site-primary 
              h-[50px] w-full rounded pl-4 border border-neutral'
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button 
            className={`w-full border-0 rounded font-semibold py-3
            ${(data.username ===  "") || (data.password === "") ? "opacity-50 bg-gray-700" :
            "opacity-100 btn-glow bg-site-primary"}`} 
            disabled={(data.username ===  "") && (data.password === "") ? true : false}
            type="submit"
            onClick={updateAuthenticate}
          >
            Sign In
          </button>
          <div className='w-full text-center my-5' >
            <p>Don't have an account? <Link className='text-site-primary' to="/sign-up" >Sign Up</Link></p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login
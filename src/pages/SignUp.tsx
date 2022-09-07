import { useState } from 'react';
import logo from '../assets/gamers-guild-1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postSignUp } from '../helper';

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    terms_privacy: false
  });

  const mutation = useMutation<any, Error, any>(newUser => {
    return postSignUp(newUser)
  })
  

  const handleChange = (e:any) => {
    if (e.target.type === "checkbox") {
      setData({
        ...data,
        [e.target.name]: !data.terms_privacy
      })
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
  }

  // Verify if the required info to the creation of an account is fulfilled
  const verifySubmit = () => {
    if (
      data.fullname === "" ||
      data.email === "" ||
      data.username === "" ||
      data.password === "" ||
      // data.password.length >= 8 ||
      data.confirm_password !== data.password ||
      data.terms_privacy !== true
    ) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    mutation.mutate({
      fullname: data.fullname,
      username: data.username,
      email: data.email,
      password: data.password
    },
    {
      onSuccess: (res) => {navigate("/login")},
    })
  }
  return (
    <main className='lg:my-10 md:my-8 flex justify-center items-center min-h-screen' >
      <div 
      className='md:border border-neutral rounded-lg lg:py-10 md:w-[462px] md:px-8 px-4
      lg:px-14 lg:w-[520px] md:py-10 py-8' 
    >
        <div className='flex items-center justify-center' >
          <Link to="/" >
            <img src={logo} alt='logo' className='w-20 h-16 mb-8' />
          </Link>
        </div>
        <h2 className='text-center mb-6 font-bold text-2xl' >Join our guild for gamers</h2>
        <form onSubmit={handleSubmit} >
          <div className='mb-4' >
            <label className='lg:text-xl font-semibold mb-2' >Full Name</label>
            <input 
              name="fullname"
              type="text"
              className='focus:outline focus:outline-site-primary focus:border-site-primary 
              h-[50px] w-full rounded pl-4 border border-neutral'
              onChange={handleChange}
            />
          </div>
          <div className='mb-4' >
            <label className='lg:text-xl font-semibold mb-2' >Username</label>
            <input 
              name="username"
              type="text"
              className='focus:outline focus:outline-site-primary focus:border-site-primary 
              h-[50px] w-full rounded pl-4 border border-neutral'
              onChange={handleChange}
            />
          </div>
          <div className='mb-4' >
            <label className='lg:text-xl font-semibold mb-2' >Email</label>
            <input 
              name="email"
              type="email"
              className='focus:outline focus:outline-site-primary focus:border-site-primary 
              h-[50px] w-full rounded pl-4 border border-neutral'
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
              onChange={handleChange}
            />
          </div>
          <div className='mb-4' >
            <label className='lg:text-xl font-semibold mb-2' >Confirm Password</label>
            <input 
              name="confirm_password"
              type="password"
              className='focus:outline focus:outline-site-primary focus:border-site-primary 
              h-[50px] w-full rounded pl-4 border border-neutral'
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-center items-center gap-x-3 py-5' >
            <input
              name="terms_privacy"
              type="checkbox"
              checked={data.terms_privacy}
              onChange={handleChange}
            />
            <p className='md:text-base text-sm' >
              I accept the <span className='font-semibold' >Terms of Service</span> and {" "} 
              <span className='font-semibold'>Privacy Policy</span>
            </p>
          </div>
          <button 
            className={`w-full border-0 rounded font-semibold py-3
            ${verifySubmit() ? "bg-site-primary btn-glow opacity-100" : "opacity-50 bg-gray-700"}`}
            disabled={!verifySubmit()}
          >
            {mutation.isLoading ? "Loading...." : "Sign Up"}
          </button>
          <div className='w-full text-center my-5' >
            <p>Already have an account? <Link className='text-site-primary' to="/login" >Log in</Link></p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SignUp
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import GoogleLogin from 'react-google-login'

const Hero = () => {
  const handleLogin = async (googleData)=>{
    // const res = await fetch("/api/v1/auth/google",{
    //    method: "POST",
    //    body: JSON.stringify({token: googleData.tokenId}),
    //    headers:{"Content-Type":"application/json"} 
    // });
    // const data = await res.json();
    // console.log(data);  
    console.log(googleData);
  }
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-6xl lg:text-8xl mb-20 text-white font-extrabold">
        Perspctve
      </h1>
      <p className="lg:text-4xl md:text-2xl sm:text-2xl text-white">
        Share your perspective.
      </p>
      <p className="lg:text-4xl md:text-2xl text-white">
        Discover what the world thinks.
      </p>
      <GoogleLogin clientId="221698699531-ppoqis107v1nk3enhiqbebadq1aonfg2.apps.googleusercontent.com" 
      buttonText="Sign in"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={'single_host_origin'}/>
      <Link className="mt-10 py-4 px-6 bg-gray-50 ring-2 rounded-sm text-1xl md:text-2xl text-blue-800 hover:bg-blue-700 hover:text-gray-50" to="/profile">Sign in using <FontAwesomeIcon icon={ faGoogle } /></Link>
    </div>
  )
}

export default Hero

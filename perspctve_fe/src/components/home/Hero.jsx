import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import GoogleLogin from 'react-google-login'
import {fetchToken } from '../../apis/authService'
import { useHistory } from 'react-router';
import Loading from '../common/Loading';



const Hero = () => {

  const [showGoogleButton, setShowGoogleButton] = useState(true)

  const history = useHistory()

  const handleSuccess = async (googleData)=>{
    setShowGoogleButton(false);
    fetchToken(googleData.tokenId).then((resp)=>{
      // store user info in local store
      localStorage.setItem('token', resp.headers['x-auth-token'])
      localStorage.setItem('email', resp.data.email)
      localStorage.setItem('first_name', resp.data.first_name)
      localStorage.setItem('last_name', resp.data.last_name)
      localStorage.setItem('avatar', resp.data.avatar)
      // set context
      // redirect to profile page
      history.replace("/profile")
    });
  }

  const handleFailure = async(googleData) =>{
    setShowGoogleButton(true);
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
      {
        showGoogleButton ?
        <GoogleLogin clientId="221698699531-ppoqis107v1nk3enhiqbebadq1aonfg2.apps.googleusercontent.com" 
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="mt-10 py-4 px-6 bg-gray-50 ring-2 rounded-sm text-1xl md:text-2xl text-blue-800 hover:bg-blue-700 hover:text-gray-50">Sign in using <FontAwesomeIcon icon={ faGoogle }/></button>
        )}
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        isSignedIn = {false}
        /> :
        <div className="mt-5">
          <Loading/>  
        </div>
        
      }
    </div>
  )
}

export default Hero

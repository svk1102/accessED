import React from 'react'
import {GoogleLogin} from "@react-oauth/google"
import Nav from '../NavBar/Nav'
import {useNavigate} from "react-router-dom"
import SpeechToText from '../Students/speechToText'

const Auth = () => {
    const user = false
    const navigate = useNavigate();
  return (
    <>
        <Nav/>
        <div className="h-56 w-72 sm:w-3/4 lg:w-1/2 p-2 sm:p-4 bg-nav-color text-white rounded-2xl font-general shadow-2xl mx-auto mt-40">

             <div className="text-3xl font-extrabold">Sign In with Google</div>           
                 <div className=" flex justify-center items-center mt-10">     
                {
                    user ? (
                        <>Logged In</>
                    ):(
                        <GoogleLogin 
                        onSuccess={(res) => {
                            console.log(res)
                            navigate("/")
                        }}
                        onError={(err) => {
                            console.log(err)
                        }}
                        />
                    )
                }
            </div>
        </div>
        <SpeechToText/>
    </>
  )
}

export default Auth
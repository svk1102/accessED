import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Nav from '../NavBar/Nav'
import SpeechToText from './speechToText'
import VideoSuggetions from './videoSuggetions'
import axios from "axios"
import { createContext } from 'react';
import { useContext } from 'react';
import { PostContext } from '../../provider';
import Chatbot from "./chatbot"




const Videoplayer = () => {

  const[count,setCount] = useState(0)
  const[images,setImages] = useState([])

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/isl/', {
      text: 'hello my name is patricia espiritu',
    })
    .then(function (response) {
      console.log(response.data.images);
      setImages(response.data.images)
    })
    .catch(function (error) {
      console.log(error);
    });
  
  },[])


  const [formData, setFormData] = useState("Hi");
  const  createPost  = useContext(PostContext);


  return (
    <>
    <Nav/>
    <div className="container md:container md:mx-auto pt-20 mt-4">
      <div className="flex h-auto">
        <div className=" w-max p-4 bg-nav-color text-white rounded-2xl font-general shadow-2xl mx-auto mb-4">
            <ReactPlayer url="https://www.youtube.com/watch?v=p80VyQ5wLvg" playing={false} loop={true} playbackRate={0.5}/>
        </div>
        <div className="flex flex-col h-96 overflow-x-hidden overflow-y-scroll scrollbar-hide mr-4">
          {images.map((img) => {
            return(
              <div>
                <img src={`http://127.0.0.1:8000${img}`} width="500"/>
              </div>
            )
          })}
        </div>
        </div>
        <div>
            <VideoSuggetions/>
        </div>
        <div>
          <Chatbot/>
        </div>
        <div>
            <SpeechToText/>
        </div>
    </div>
    </>
  )
}

export default Videoplayer
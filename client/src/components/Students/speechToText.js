import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {FaMicrophone} from "react-icons/fa"
import {AiFillDelete} from "react-icons/ai"
import {useNavigate} from "react-router-dom"



const SpeechToText = () => {
    const { transcript, resetTranscript } = useSpeechRecognition({
      continuous: true
    });

    window.addEventListener("keyup",(e)=>{
      if(e?.key == "m"){
        SpeechRecognition.startListening()
      }
      if(e?.key == "c"){
        window.location.reload(false)
      }
    })

    useEffect(() => {
        console.log(transcript)
        switch (transcript) {
          case "go to home":
            navigate("/")
            resetTranscript();
            window.location.reload(false)
            break;
          case "go to login":
            navigate("/login")
            resetTranscript();
            window.location.reload(false)
            break;
          case "go to play":
            navigate("/play")
            resetTranscript();
            window.location.reload(false)
            break
          case "go to questions":
            navigate("/question")
            resetTranscript();
            window.location.reload(false)
            break
          case "go to quiz":
            navigate("/quiz")
            resetTranscript();
            window.location.reload(false)
            break
          case "start maths quiz":
            navigate("/quiz/questions/maths")
            resetTranscript();
            window.location.reload(false)
            break
          case "start science quiz":
              navigate("/quiz/questions/science")
              resetTranscript();
              window.location.reload(false)
              break
          case "play game":
              navigate("/game")
              resetTranscript();
              window.location.reload(false)
              break
          case "go to upload":
                navigate("/upload")
                resetTranscript();
                window.location.reload(false)
                break
          
          default:
            break;
        }
    },[transcript])

const navigate = useNavigate();

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null;
    }



    return (
      <div>
        {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
        <FaMicrophone onClick={SpeechRecognition.startListening} className="text-5xl fixed bottom-5 left-12 bg-white p-2 rounded-full cursor-pointer">Start</FaMicrophone>
        <div className="text-4xl font-bold fixed bottom-5 flex justify-center items-center text-center w-full text-white">{transcript}</div>
        {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
        <AiFillDelete className="text-5xl fixed bottom-5 right-5 bg-white p-2 rounded-full cursor-pointer" onClick={resetTranscript}>Reset</AiFillDelete>
      </div>
    );
  };

export default SpeechToText
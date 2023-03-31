import React,{useState} from 'react'
import {TbMessageChatbot} from "react-icons/tb"


const Chatbot = () => {

    const [showElement, setShowElement] = useState(false);

  const handleClick = () => {
    setShowElement(!showElement);
  };


  return (
    <>
    <div onClick={handleClick}>
        <TbMessageChatbot className="text-5xl fixed bottom-5 left-2/4 bg-white p-2 rounded-full cursor-pointer"/>
    </div>
    <div className="fixed bottom-5 left-2/3 ">
        <iframe style={{ display: showElement ? 'block' : 'none' }}
 width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/b3de0dd0-6ef7-444c-b002-90770edac091"></iframe>
        
    </div>
    </>
  )
}

export default Chatbot
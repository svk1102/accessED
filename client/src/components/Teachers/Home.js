import React from 'react'
import Nav from '../NavBar/Nav'
import SpeechToText from '../Students/speechToText'


const Home = () => {
  return (
    <>
    <div>
        <Nav/>
        <div className="container md:container md:mx-auto pt-20 mt-8">
                        <div className="h-1/2 w-72 sm:w-3/4 lg:w-1/2 p-2 sm:p-4 bg-gradient-to-r from-green-500 to-yellow-300 text-white rounded-2xl font-general shadow-2xl mx-auto">
                            <h1 className="text-3xl py-8">Upload Video</h1>
                            <div className="mb-3 pt-0">
                                <input 
                                type="email" 
                                placeholder="Video Title" 
                                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative text-black bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring xl:w-3/5" 
                                // value={userEmail}
                                // onChange={setUserEmail}
                                // onKeyPress={handleKeypress}
                                />
                                <textarea 
                                placeholder="Description" 
                                className="px-3 py-3 mt-8 placeholder-blueGray-300 text-blueGray-600 relative text-black bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring xl:w-3/5" 
                                aria-describedby="file_input_help" id="file_input" type="file"/>
                                <input 
                                placeholder="Thumbnail" 
                                className="px-3 py-3 mt-8 placeholder-blueGray-300 text-blueGray-600 relative text-black bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring xl:w-3/5" 
                                aria-describedby="file_input_help" id="file_input" type="file" accept="video/*"/>
                                <input 
                                placeholder="Video Title" 
                                className="px-3 py-3 mt-8 placeholder-blueGray-300 text-blueGray-600 relative text-black bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring xl:w-3/5" 
                                aria-describedby="file_input_help" id="file_input" type="file" accept="video/*"/>
                                <button href="#" type="submit" className="bg-nav-color cursor-pointer text-white block px-3 py-2 mt-10 w-40 mx-auto rounded-md text-base font-medium">
                                    UPLOAD
                                </button>
                            </div>
                        </div>
                    </div>
    </div>
    <SpeechToText/>
    </>
  )
}

export default Home
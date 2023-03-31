import React from 'react'
import Nav from '../NavBar/Nav'
import cattle from '../../asset/childs.png'
import isl from '../../asset/isl.png'
import text from '../../asset/text.jpg'
import SpeechToText from './speechToText'
import Chatbot from "./chatbot"
const Landing = () => {
  return (
    <>
      <Nav />
      <div className="container mt-40 mb-16 mx-auto p-4 md:p-0">

        <div className=" shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">


          <div className="  w-full md:w-1/3 h-64 md:h-auto relative">
            <img src={cattle} />
          </div>

          <div className=" w-full md:w-2/3">

            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

              <div className="w-full lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

                <div className="w-full lg:w-24 lg:border-right lg:border-solid text-center md:text-left">

                </div>

                <div className="w-full lg:w-3/5 lg:px-3 text-opacity-100">
                  <p className="text-md mt-8 md:mt-0 text-justify md:text-left text-3xl italic font-bold">
                    "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles." - Christopher Reeve

                  </p>
                </div>


              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="container mt-40 mb-16 mx-auto p-4 md:p-0 ">

        <div className=" flex flex-wrap w-full lg:w-4/5 mx-auto pt-20">
          <p className="text-md mt-20 md:mt-0 text-justify md:text-left text-3xl font-semibold">
            Our website aims at fostering accessible student technologies for students with hearing, visual and physical disabilities. We follow the sustainable goals created by the united nations. This project is in accordance with Quality education and reduced inequalities goals. As stated by the United Nations (UN), accessibility occurs when a person with some disability has the independence to act in an environment, whether it is physical or virtual. We make learning easy for the PwD students using technology.
            Students can learn using various fun videos and asses themselves using quizzes available for different topics.

          </p>
        </div>
        <div className=" shadow-lg flex flex-wrap w-full lg:w-2/3 mx-auto">


          <div className="  w-full md:w-80 h-64 md:h-auto relative mt-20">
            <img className='w-72 p-2 m-auto justify-center items-center' src={text} />
          </div>

          <div className=" w-full md:w-2/3">

            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

              <div className="w-full lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

                <div className="w-full lg:w-24 lg:border-right lg:border-solid text-center md:text-left">

                </div>

                <div className="w-full lg:w-3/5 lg:px-3 text-opacity-100">
                  <p className="text-md  md:mt-0 text-justify md:text-left text-xl italic font-semibold">
                  Students can also play educational games which help differently-abled students to learn better.
                  </p>
                </div>


              </div>

            </div>

          </div>

        </div>

        <div className=" shadow-lg flex flex-wrap w-full lg:w-2/3 mx-auto">


<div className="  w-full md:w-80 h-64 md:h-auto relative border-solid">
  <img className='w-72 p-2 m-auto justify-center items-center' src={isl} />
</div>

<div className=" w-full md:w-2/3">

  <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

    <div className="w-full lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

      <div className="w-full lg:w-24 lg:border-right lg:border-solid text-center md:text-left">

      </div>

      <div className="w-full lg:w-3/5 lg:px-3 text-opacity-100">
        <p className="text-md  md:mt-0 text-justify md:text-left text-xl italic font-semibold">
        Visually impaired students can ask the assistant to read aloud the contents or quizzes.
We apply video-based sign language recognition and closed captions for hearing-impaired students. 
        </p>
      </div>


    </div>

  </div>

</div>

</div>

<div className=" shadow-lg flex flex-wrap w-full lg:w-2/3 mx-auto">


          <div className="  w-full md:w-80 h-64 md:h-auto relative">
            <img className='w-72 p-2 m-auto justify-center items-center' src="https://streetfightmag.com/wp-content/uploads/Fotolia_95509194_S.jpg" />
          </div>

          <div className=" w-full md:w-2/3">

            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

              <div className="w-full lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

                <div className="w-full lg:w-24 lg:border-right lg:border-solid text-center md:text-left">

                </div>

                <div className="w-full lg:w-3/5 lg:px-3 text-opacity-100">
                  <p className="text-md  md:mt-0 text-justify md:text-left text-xl italic font-semibold">
                  Users can access the courses and quizzes hands-free using voice commands and navigate the website     </p>
                </div>


              </div>

            </div>

          </div>

        </div>
        <div className=" shadow-lg flex flex-wrap w-full lg:w-2/3 mx-auto">


<div className="  w-full md:w-80 h-64 md:h-auto relative">
  <img className='w-72 p-2 m-auto justify-center items-center' src={cattle} />
</div>

<div className=" w-full md:w-2/3">

  <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

    <div className="w-full lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

      <div className="w-full lg:w-24 lg:border-right lg:border-solid text-center md:text-left">

      </div>

      <div className="w-full lg:w-3/5 lg:px-3 text-opacity-100">
        <p className="text-md  md:mt-0 text-justify md:text-left text-xl italic font-semibold">
        Students can book appointments with teachers to clarify any doubts using the chatbot available. We have many study materials available that users can access in 107 different languages!</p>.
 </div>


    </div>

  </div>

</div>

</div>



      </div>
      <Chatbot/>
      <SpeechToText/>
    </>
  )
}

export default Landing
import React from 'react'
import Logo from "../../asset/logo.png";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
    <nav className="bg-nav-color h-20 fixed top-0 w-full z-30 " >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 w-full">
            
         <div className="md:block flex-shrink-0 h-20 w-20 ">
               <Link to="/"><img
                  className=" h-16 w-16"
                  src={Logo} alt="logo"
                /></Link>
              </div>
              <div className="flex justify-center items-center p-2 m-2 text-2xl font-bold text-white">
                <Link to="/quiz"><p className="p-2 m-2 cursor-pointer">Quiz</p></Link>
                <Link to="/play"><p className="p-2 m-2 cursor-pointer">Courses</p></Link>
                <Link to="/game"><p className="p-2 m-2 cursor-pointer">Games</p></Link>
              </div>
                
            </div>
            
        </div>

        
      </nav>
    </div>
  )
}

export default Nav
import React from 'react'
import Nav from '../NavBar/Nav'
import SpeechToText from './speechToText';
import { Link } from 'react-router-dom';

const QuizDisplay = () => {
    const posts = [
        {
            title: "Assignment 1",
            bgcolor:"#f07122",
            content: "maths"
        },
        {
            title: "Assignment 2",
            bgcolor:"#FD8A8A",
            content: "science"
        },
        {
            title: "Assignment 3",
            bgcolor:"#F1F7B5",
            content: "General Knowledge"
        },
        {
            title: "Assignment 4",
            bgcolor:"#A8D1D1",
            content: "English"
        },
        {
            title: "Assignment 5",
            bgcolor:"#9EA1D4",
            content: "Hindi"
        },
        
    ];
  return (
    <>
    <Nav/>
    <p className="text-4xl font-bold text-black mt-32">Assessments</p>
    <div className="container lg:ml-12 grid gap-4 lg:grid-cols-3 mt-10 ">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" style={{backgroundColor: items.bgcolor}} key={key}>
                        
                        <div className="p-4">
                            <h4 className="text-2xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="text-2xl mt-4 mb-2 leading-normal">
                            {items.content}
                            </p>
                            <Link to={`questions/${items.content}`}>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Start Test
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <SpeechToText/>
    </>
  )
}

export default QuizDisplay
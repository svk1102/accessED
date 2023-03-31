import React from 'react'
import { useState } from 'react';
import './quizstyle.css'
import { useSpeechSynthesis } from 'react-speech-kit';
import Nav from '../NavBar/Nav';
import SpeechToText from '../Students/speechToText';


const QuizScience = () => {

    var Questionbank = [
        {
            Question: "Squirrel monkey is a type of ?",
            Options: "Squirrel Lizard Monkey Panda",
            Answers: [
                { Answer: "Squirrel", isCorrect: false },
                { Answer: "Lizard", isCorrect: false },
                { Answer: "Monkey", isCorrect: true },
                { Answer: "Panda", isCorrect: false }
            ]
        },
        {
            Question: "An instrument to measure temperature is called",
            Options: "Hydrometer Thermometer Gyrometer Tempometer",
            Answers: [
                { Answer: "Hydrometer", isCorrect: false },
                { Answer: "Thermometer", isCorrect: true },
                { Answer: "Gyrometer", isCorrect: false },
                { Answer: "Tempometer", isCorrect: false }
            ]
        },
        {
            Question: "Which is the bird that is born out of the largest egg in the world? ",
            Options: "Hen Turkey Ostrich Sparrow",
            Answers: [
                { Answer: "Hen", isCorrect: false },
                { Answer: "Turkey", isCorrect: true },
                { Answer: "Ostrich", isCorrect: false },
                { Answer: "Sparrow", isCorrect: false }
            ]
        },
        {
            Question: "The seventh planet from the sun is?",
            Options: "Earth Uranus Mars Jupiter",
            Answers: [
                { Answer: "Earth", isCorrect: false },
                { Answer: "Uranus", isCorrect: true },
                { Answer: "Mars", isCorrect: false },
                { Answer: "Jupiter", isCorrect: false }
            ]
        },
        {
            Question: "Name the blanket of air that surrounds the earth. ",
            Options: "Upper crust Hydrosphere Lithosphere Atmosphere",
            Answers: [
                { Answer: "Upper crust", isCorrect: false },
                { Answer: "Hydrosphere", isCorrect: false },
                { Answer: "Lithosphere", isCorrect: false },
                { Answer: "Atmosphere", isCorrect: true }
            ]
        },
        {
            Question: "The number of bones in the Human face is ______? ",
            Options: "14 33 15 11",
            Answers: [
                { Answer: "14", isCorrect: true },
                { Answer: "33", isCorrect: false },
                { Answer: "15", isCorrect: false },
                { Answer: "11", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [text,setText] = useState(Questionbank[0].Question+Questionbank[0].Options);
const {speak} = useSpeechSynthesis();

window.addEventListener("keyup",(e)=>{
    if(e?.key == "a"){
      handleAnswerResponse(Questionbank[currentQuestion].Answers[0].isCorrect)
    }
    if(e?.key == "b"){
        handleAnswerResponse(Questionbank[currentQuestion].Answers[1].isCorrect)
    }
    if(e?.key == "c"){
        handleAnswerResponse(Questionbank[currentQuestion].Answers[2].isCorrect)
    }
    if(e?.key == "d"){
        handleAnswerResponse(Questionbank[currentQuestion].Answers[3].isCorrect)
    }
  }) 


console.log(text)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    console.log(currentQuestion)
    
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
    setText(Questionbank[nextQuestion].Question + Questionbank[nextQuestion].Options)
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    window.location.reload(false)
}
const handleOnClick = () => {
    speak({text:text})
    
  }
  

    return (
        <><Nav/>

        <p className="text-3xl font-bold text-black mt-32">Assignment No 1</p>
            <p className="text-3xl font-bold text-black">Science</p>
        <div className='app m-auto justify-center items-center align-middle flex mt-10 bg-gradient-to-r from-green-500 to-yellow-300 w-1/2 h-48 text-2xl '>
            
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button className="button1" type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>
                            <button className="button1" onClick={()=>{handleOnClick()}}>Listen</button>
                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>
                        

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button className="button1" onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
        <SpeechToText/>
        </>
    );
}

export default QuizScience;
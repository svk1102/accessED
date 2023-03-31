import React from 'react'
import { useState } from 'react';
import './quizstyle.css'
import { useSpeechSynthesis } from 'react-speech-kit';
import Nav from '../NavBar/Nav';


const QuizComp = () => {

    var Questionbank = [
        {
            Question: "What's the sign of multiplication? ?",
            Options: "X + - /",
            Answers: [
                { Answer: "X", isCorrect: true },
                { Answer: "+", isCorrect: false },
                { Answer: "-", isCorrect: false },
                { Answer: "/", isCorrect: false }
            ]
        },
        {
            Question: "If a person has 440 pens and 560 pencils, how many more pencils does he have?",
            Options: "110 120 130 140",
            Answers: [
                { Answer: "110", isCorrect: false },
                { Answer: "120", isCorrect: true },
                { Answer: "130", isCorrect: false },
                { Answer: "140", isCorrect: false }
            ]
        },
        {
            Question: "What's 8 - 3.5? ",
            Options: "2.5 4.5 5.5 6.5",
            Answers: [
                { Answer: "2.5", isCorrect: false },
                { Answer: "4.5", isCorrect: true },
                { Answer: "5.5", isCorrect: false },
                { Answer: "6.5", isCorrect: false }
            ]
        },
        {
            Question: "What's 472 multiplied by 0?",
            Options: "529 17 782 0",
            Answers: [
                { Answer: "529", isCorrect: false },
                { Answer: "17", isCorrect: false },
                { Answer: "782", isCorrect: false },
                { Answer: "0", isCorrect: true }
            ]
        },
        {
            Question: "The perimeter of a circle is known as? ",
            Options: "Square Circumference Pie Parallel",
            Answers: [
                { Answer: "Square", isCorrect: false },
                { Answer: "Circumference", isCorrect: true },
                { Answer: "Pie", isCorrect: false },
                { Answer: "Parallel", isCorrect: false }
            ]
        },
        {
            Question: "How many years complete a decade? ",
            Options: "10 5 20 50",
            Answers: [
                { Answer: "10", isCorrect: true },
                { Answer: "5", isCorrect: false },
                { Answer: "20", isCorrect: false },
                { Answer: "50", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [text,setText] = useState(Questionbank[0].Question+Questionbank[0].Options);
const {speak} = useSpeechSynthesis();

console.log(text)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

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
            <p className="text-3xl font-bold text-black">Maths</p>
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
        </>
    );
}

export default QuizComp;
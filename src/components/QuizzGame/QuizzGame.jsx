/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import styles from './QuizzGame.module.css';


function QuizzGame(){
  
  //to move index to show each question and its anwsers.
  const [index, setIndex] = useState(0);

  //for the condition to stop.
  const [count, setCount] = useState(1);
  
  //display the end of the quizz if true(deafult false so display the questions).
  const [scoreDisplay, setScoreDisplay] = useState(false);

  //to change the score.
  const [score, setScore] = useState(0);





////////////////////////////////////////////////////////////////////
  const questions = [
    {
      question: "What is the most popular Game ?",
      choices: [
        {choice:'Fifa', isCorrect:true}, {choice:'Counter-Strike', isCorrect:false, img:'./img/Counter-Strike.jpg'}, {choice:'PalWorld', isCorrect:false, img:'./img/Dishonored.jpg'}
      ]
    },

    {
      question: "What is the most popular Sport ?",
      choices: [
        {choice:'Rugby', isCorrect:false}, {choice:'Handball', isCorrect:false}, {choice:'Volleyball', isCorrect:true}
      ]
    },
    {
      question: "What is the capital of Argentina ?",
      choices: [
        {choice:'Rio de la plata', isCorrect:false}, {choice:'Bueno Aires', isCorrect:true}, {choice:'Porto', isCorrect:false}
      ]
    },
    {
      question: "Who is the Highest paied athelet in the world ?",
      choices: [
        {choice:'LeBron James', isCorrect:false}, {choice:'Jon Rahm', isCorrect:true}, {choice:'Canelo Alvarez', isCorrect:false}
      ]
    },
  ]



  ////////////////////////////////////////////////////////////////////
  const arrayLength = questions.length;

  function handleChange(index, isCorrect){
    //console.log({count}, {arrayLength});
    console.log(isCorrect);
    console.log({score});


    if(isCorrect){
      setScore(prevScore => prevScore+1);
    }

    if(count < arrayLength){
      //console.log(`changed`);
      setIndex(prevIndex => prevIndex + 1);
      setCount(count+1);
      
    }else{
      
      //console.log({scoreDisplay});
      setScoreDisplay(true);
    }
    
    //console.log({scoreDisplay});
  }

  /*function handleScore(){
    setScoreDisplay(true);
  }*/
//////////////////////////////////////////////////////////////////////



  return(
  
  <div>
      <h1>Quizz Game</h1>
      
      <div className={styles.display_container}>
      
        {scoreDisplay ? 
        (
          <span>Your score is {score} out of 4 </span>
        ) :

        (
       
          <>
            <div>
              <p>Question {count}/4</p><br/>
              <p className={styles.question}> {questions[index].question}</p>
            </div>
            
        
            
           <div className={styles.button_container}>

              {questions[index].choices.map((choice, index) => <button key={index} onClick={index => handleChange(index, choice.isCorrect)}>
                                                                  {choice.choice} 
                                                                  </button>    )}                                               
          </div>
          </>
          

      )}
    </div>

  </div>
);
////////////////////////////////////////////////////////////////////


}

export default QuizzGame
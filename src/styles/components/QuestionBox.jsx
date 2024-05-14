import questions from "@/data/questions";
import Button from "@/components/Button";
import { useState } from "react";

export default function QuestionBox({num, setNum}) {
    const currentQuestion = questions.filter(question => question.id == num)[0];

    const [selected, setSelected] = useState("");

    const handleClick = () =>{
        setNum(num + 1);
        console.log(selected == currentQuestion.answer ? "Correct" : "Incorrect");
    }

    return (
      <>
        <h1>Question {num}</h1>
        <p>{currentQuestion.question}</p>
        <fieldset>
            {currentQuestion.options.map((option, index) => {
                return(
                    <div>
                        <input type="radio" id={index} name="option" value={option} onChange={() => setSelected(option)}/>
                        <label htmlFor={index}> {option}</label>
                    </div>
                )
            })}
        </fieldset>
        <Button text="Następne pytanie" handleClick={handleClick} />
      </>
    );
  }
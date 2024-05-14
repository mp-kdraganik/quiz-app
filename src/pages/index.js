import styles from "@/styles/Home.module.css";
import StartBox from "@/styles/components/StartBox";
import QuestionBox from "@/styles/components/QuestionBox";
import { useState } from "react";

export default function Home() {

  const [state, setState] = useState("start");
  const [questionNum, setQuestionNum] = useState(1);

  return (
    <div className={styles.container}>
      {state == "start" ? <StartBox changeState={setState} /> : <QuestionBox num={questionNum} setNum={setQuestionNum}/>}
    </div>
  );
}

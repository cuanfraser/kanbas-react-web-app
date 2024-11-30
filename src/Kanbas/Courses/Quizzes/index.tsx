import { useEffect } from "react";
import { useParams } from "react-router";
import QuizzesControls from "./QuizzesControls";
import QuizzesList from "./QuizzesList";


export default function Quizzes() {
  const { cid } = useParams();
  const quizzes: any[] = [];

  // useEffect(() => {

  // }[cid])

  return (
    <div id='wd-quizzes' className='text-nowrap'>
      <QuizzesControls />
      <QuizzesList quizzes={quizzes} />
    </div>
  )
}
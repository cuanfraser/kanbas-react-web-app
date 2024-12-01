import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { findQuizById } from '../client';
import QuizDetailsControls from './QuizDetailsControls';
import { Quiz } from '../types';

export default function QuizDetails() {
  const { cid } = useParams();
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState<Quiz>({} as Quiz);

  useEffect(() => {
    const fetchQuiz = async (quizId: string) => {
      const quiz = await findQuizById(quizId);
      setQuiz(quiz);
    };
    fetchQuiz(quizId as string);
  }, [cid, quizId]);

  return (
    <div id='wd-quiz-details' className='text-nowrap'>
      <QuizDetailsControls />
      <div className='d-flex'>
        <h2>{quiz.title}</h2>
        <div className='quiz-details-fields'>
          <div className='quiz-details-type'>
            <span>Quiz Type</span>
            <span>{quiz.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

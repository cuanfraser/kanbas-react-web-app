import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Quiz } from '../types';
import { findQuizById } from '../client';
import QuizQuestionsEditor from './QuizQuestionsEditor';
import QuizDetailsEditor from './QuizDetailsEditor';

export default function QuizEditor() {
  const { cid } = useParams();
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState<Quiz>({
    title: '',
    description: '',
    type: '',
    points: 0,
    group: '',
    shuffle: true,
    time: 0,
    multiple_attempts: false,
    show_correct: '',
    access_code: '',
    one_question_at_a_time: false,
    webcam: false,
    lock_after_answers: false,
    due: new Date(),
    available: new Date(),
    available_until: new Date(),
  } as Quiz);
  const [questionsDisplay, setQuestionsDisplay] = useState(false);

  useEffect(() => {
    const fetchQuiz = async (quizId: string) => {
      const quiz = await findQuizById(quizId);
      setQuiz(quiz);
    };
    fetchQuiz(quizId as string);
  }, [cid, quizId]);

  return (
    <div id='quiz-editor'>
      <hr />

      <ul className='nav nav-tabs mb-4'>
        <li className='nav-item'>
          <button
            className={`nav-link ${questionsDisplay ? 'text-danger' : 'active'}`}
            onClick={() => setQuestionsDisplay(false)}>
            Details
          </button>
        </li>
        <li className='nav-item'>
          <button
            className={`nav-link ${questionsDisplay ? 'active' : 'text-danger'}`}
            onClick={() => setQuestionsDisplay(true)}>
            Questions
          </button>
        </li>
      </ul>
      {questionsDisplay ? (
        <QuizQuestionsEditor quiz={quiz} />
      ) : (
        <QuizDetailsEditor quiz={quiz} setQuiz={setQuiz} />
      )}
    </div>
  );
}

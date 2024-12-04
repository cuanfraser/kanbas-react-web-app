import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Question } from '../../Questions/types';
import { Quiz } from '../../types';
import { findQuizById } from '../../client';
import { findQuestionsForQuiz } from '../../Questions/client';
import QuestionPrompt from './QuestionAttempt';
import { useDispatch, useSelector } from 'react-redux';
import { createAttempt } from '../client';
import { RootState } from '../../../../store';
import { setAttempt } from '../reducer';

export default function AnswerQuiz() {
  const { cid, quizId } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quiz, setQuiz] = useState<Quiz>({} as Quiz);
  const [questions, setQuestions] = useState<Question[]>([]);
  const { quizAttempt } = useSelector((state: RootState) => state.quizAttemptReducer);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  // TODO: CONTINUE EXISTING ATTEMPT, FACULTY TOO

  useEffect(() => {
    if (!currentUser) {
      navigate('/Kanbas/Account/Signin');
    }
    if (quizId) {
      const fetchQuiz = async (quizId: string) => {
        const quizResponse = await findQuizById(quizId);
        setQuiz(quizResponse);
        const questionResponse = await findQuestionsForQuiz(quizResponse._id);
        setQuestions(questionResponse);
        // TODO EXISTING
        createAttempt(quizId, { started: new Date().toString() }).then((response) =>
          dispatch(setAttempt(response))
        );
      };
      fetchQuiz(quizId as string);
    }
  }, [quizId, currentUser, navigate, dispatch]);

  const handlePrevClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (quiz && questions) {
    return (
      <form id='quiz-attempt' className=''>
        <h2>{quiz.title}</h2>
        <hr />

        <div className='quiz-attempt-questions border rounded border-1 p-2'>
          {quiz.one_question_at_a_time && <QuestionPrompt question={questions[currentQuestion]} />}
          {!quiz.one_question_at_a_time &&
            questions.map((question) => <QuestionPrompt question={question} />)}
        </div>

        {quiz.one_question_at_a_time && (
          <div className='d-flex justify-content-between m-2'>
            <button type='button' className='btn btn-secondary' onClick={handlePrevClick}>
              Previous
            </button>
            <button type='button' className='btn btn-secondary' onClick={handleNextClick}>
              Next
            </button>
          </div>
        )}

        <div className='quiz-attempt-buttons d-flex justify-content-center gap-2 m-2'>
          {(currentUser.role === 'FACULTY' || currentUser.role === 'ADMIN') && (
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/edit`)}>
              Edit Quiz
            </button>
          )}

          <button type='button' className='btn btn-secondary'>
            Submit Quiz
          </button>
        </div>
      </form>
    );
  } else return <div>Loading</div>;
}

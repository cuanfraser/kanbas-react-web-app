import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Quiz } from '../types';
import { findQuizById, updateQuiz } from '../client';
import QuizQuestionsEditor from './QuizQuestionsEditor';
import QuizDetailsEditor from './QuizDetailsEditor';
import { Question } from '../Questions/types';
import { findQuestionsForQuiz } from '../Questions/client';
import { IoIosCheckbox } from 'react-icons/io';
import { TiCancel } from 'react-icons/ti';

export default function QuizEditor() {
  const { cid } = useParams();
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<Quiz>({
    title: '',
    published: false,
    description: '',
    type: '',
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
  const [totalPoints, setTotalPoints] = useState(0);

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (quizId) {
      findQuizById(quizId).then((response) => setQuiz(response));
      findQuestionsForQuiz(quizId).then((response) => setQuestions(response));
    }
  }, [cid, quizId]);

  useEffect(() => {
    const totalPoints = questions.reduce((acc, curr) => acc + curr.points, 0);
    setTotalPoints(totalPoints);
  }, [questions]);

  const handleSave = async () => {
    await updateQuiz(quiz);
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}`);
  };

  const handleSavePublish = async () => {
    await updateQuiz({ ...quiz, published: true });
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  return (
    <div id='quiz-editor'>
      <div className='d-flex justify-content-end align-items-center gap-3'>
        <span>Points {totalPoints}</span>
        <span>
          {quiz.published ? (
            <span className='d-flex align-items-center'>
              <IoIosCheckbox className='fs-4' />
              Published
            </span>
          ) : (
            <span className='d-flex align-items-center text-secondary'>
              <TiCancel className='fs-4' />
              Not Published
            </span>
          )}
        </span>
      </div>
      <hr />

      <ul id='quiz-editor-nav' className='nav nav-tabs mb-4'>
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
        <QuizQuestionsEditor quiz={quiz} questions={questions} setQuestions={setQuestions} />
      ) : (
        <QuizDetailsEditor quiz={quiz} setQuiz={setQuiz} />
      )}

      <div id='quiz-editor-buttons' className='d-flex gap-2 justify-content-center my-1'>
        <button
          id='quiz-editor-cancel-button'
          className='btn btn-secondary'
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes`)}>
          Cancel
        </button>
        <button id='quiz-editor-save-button' className='btn btn-danger' onClick={handleSave}>
          Save
        </button>
        <button
          id='quiz-editor-save-publish-button'
          className='btn btn-danger'
          onClick={handleSavePublish}>
          Save & Publish
        </button>
      </div>
    </div>
  );
}

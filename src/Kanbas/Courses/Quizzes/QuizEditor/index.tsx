import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Quiz } from '../types';
import { findQuizById, updateQuiz } from '../client';
import QuizQuestionsEditor from './QuizQuestionsEditor';
import QuizDetailsEditor from './QuizDetailsEditor';
import { useDispatch } from 'react-redux';

export default function QuizEditor() {
  const { cid } = useParams();
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz>({
    title: '',
    published: false,
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

  const handleSave = async () => {
    await updateQuiz(quiz);
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}`);
  };

  const handleSavePublish = async () => {
    setQuiz({ ...quiz, published: true });
    await updateQuiz(quiz);
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  return (
    <div id='quiz-editor'>
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
        <QuizQuestionsEditor quiz={quiz} />
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

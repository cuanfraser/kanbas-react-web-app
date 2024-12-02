import { Link, useNavigate, useParams } from 'react-router-dom';
import { Quiz } from './types';
import FacultyOnly from '../../FacultyOnly';
import { IoIosCheckbox } from 'react-icons/io';
import { TiCancel } from 'react-icons/ti';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { deleteQuiz, updateQuiz } from './client';
import { useDispatch } from 'react-redux';
import { updateQuiz as updateLocalQuiz, deleteQuiz as deleteLocalQuiz } from './reducer';
import { useEffect, useState } from 'react';
import { Question } from './Questions/types';
import { findQuestionsForQuiz } from './Questions/client';

export default function QuizzesListItem({ quiz }: { quiz: Quiz }) {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (quiz) {
      findQuestionsForQuiz(quiz._id).then((response) => setQuestions(response));
    }
  }, [quiz]);

  const getAvailability = (quiz: Quiz) => {
    if (!quiz.available || !quiz.available_until) {
      return '';
    }

    const currentDate = new Date();
    const available = new Date(quiz.available);
    const availableUntil = new Date(quiz.available_until);
    if (currentDate > availableUntil) {
      return 'Closed';
    }
    if (available < currentDate && currentDate < availableUntil) {
      return 'Available';
    }
    if (currentDate < available) {
      return `Not available until ${available}`;
    }
    return '';
  };

  const handlePublish = async (quiz: Quiz) => {
    const updatedQuiz = await updateQuiz({ ...quiz, published: true });
    dispatch(updateLocalQuiz(updatedQuiz));
  };

  const handleDelete = async (quizId: string) => {
    await deleteQuiz(quizId);
    dispatch(deleteLocalQuiz(quizId));
  };

  return (
    <li className='list-group-item py-2 ps-5 d-flex align-items-center justify-content-between'>
      <Link
        to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`}
        className='text-decoration-none text-reset d-flex align-items-center'>
        <div className='quiz-list-details'>
          <div className='fs-4'>{quiz.title}</div>
          <div className='quiz-list-details-bottom'>
            <span className='me-2'>{getAvailability(quiz)}</span>
            <div className='vr opacity-100' />
            <span className='m-2'>Due {new Date(quiz.due).toLocaleString()}</span>
            <div className='vr opacity-100' />
            <span className='m-2'>
              {questions ? questions.reduce((acc, curr) => acc + curr.points, 0) : 0} Pts
            </span>
            <div className='vr opacity-100' />
            <span className='m-2'> {questions?.length} Questions</span>
            <div className='vr opacity-100' />
            <span className='m-2'>TODO Student Score</span>
          </div>
        </div>
      </Link>

      <FacultyOnly>
        <div className='quiz-list-controls d-flex align-items-center'>
          {quiz.published ? (
            <button className='btn pe-none'>
              <IoIosCheckbox className='text-success fs-2' />
            </button>
          ) : (
            <button className='btn' onClick={() => handlePublish(quiz)}>
              <TiCancel className='text-danger fs-2' />
            </button>
          )}

          <div className='dropdown'>
            <button
              className='btn fs-5 d-flex align-items-center'
              data-bs-toggle='dropdown'
              aria-expanded='false'>
              <BsThreeDotsVertical />
            </button>
            <ul className='dropdown-menu'>
              <li>
                <button
                  className='dropdown-item btn'
                  onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/edit`)}>
                  Edit
                </button>
              </li>
              <li>
                <button className='dropdown-item btn' onClick={() => handleDelete(quiz._id)}>
                  Delete
                </button>
              </li>
              <li>
                <button className='dropdown-item btn' onClick={() => handlePublish(quiz)}>
                  Publish
                </button>
              </li>
            </ul>
          </div>
        </div>
      </FacultyOnly>
    </li>
  );
}

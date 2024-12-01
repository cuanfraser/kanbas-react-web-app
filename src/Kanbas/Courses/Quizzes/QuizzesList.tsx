import { BsGripVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Quiz } from './types';

export default function QuizzesList({ quizzes }: { quizzes: Quiz[] }) {
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

  return (
    <ul id='wd-quizzes-list' className='list-group m-2'>
      <li className='list-group-item d-flex align-items-center fs-5 p-3 ps-2 bg-secondary'>
        <BsGripVertical className='me-2 fs-3' />
        <div className='fs-3'>Quizzes</div>
      </li>

      {quizzes.map((quiz) => (
        <li
          key={quiz._id.toString()}
          className='list-group-item p-3 ps-3 ps-5 d-flex align-items-center'>
          <Link
            to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`}
            className='text-decoration-none text-reset'>
            <div className='quiz-list-details'>
              <div className='fs-4'>{quiz.title}</div>
              <div className=''>
                <span className='me-2'>{getAvailability(quiz)}</span>
                <div className='vr opacity-100' />
                <span className='m-2'>Due {new Date(quiz.due).toLocaleString()}</span>
                <div className='vr opacity-100' />
                <span className='m-2'>{quiz.points.toString()} Pts</span>
                <div className='vr opacity-100' />
                <span className='m-2'>TODO Num Questions</span>
                <div className='vr opacity-100' />
                <span className='m-2'>TODO Student Score</span>
              </div>
            </div>
            <div className='quiz-list-controls'></div>
          </Link>
        </li>
      ))}

      {quizzes.length < 1 && <li className='list-group-item p-3 ps-5'>Click "Add Quiz" button.</li>}
    </ul>
  );
}

import { BsGripVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function QuizzesList({ quizzes }: { quizzes: any[] }) {
  const getAvailability = (quiz: any) => {
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
        <li key={quiz._id} className='list-group-item p-3 ps-3 ps-5 d-flex align-items-center'>
          <Link to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`}>
            <div className='quiz-list-details'>
              <div className='fs-4'>{quiz.title}</div>
              <div className=''>
                <span className='me-2'>{getAvailability(quiz)}</span>
                <span className='me-2'>Due {quiz.due}</span>
                <span className='me-2'>{quiz.points} Pts</span>
                <span className='me-2'>TODO Num Questions</span>
                <span className='me-2'>TODO Student Score</span>
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

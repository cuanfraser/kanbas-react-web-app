import { BsGripVertical } from 'react-icons/bs';
import { Quiz } from './types';
import QuizzesListItem from './QuizzesListItem';
import FacultyOnly from '../../FacultyOnly';

export default function QuizzesList({ quizzes }: { quizzes: Quiz[] }) {
  return (
    <ul id='wd-quizzes-list' className='list-group m-2'>
      <li className='list-group-item d-flex align-items-center fs-5 p-3 ps-2 bg-secondary'>
        <BsGripVertical className='me-2 fs-3' />
        <div className='fs-3'>Quizzes</div>
      </li>

      {quizzes.map((quiz) => (
        <QuizzesListItem quiz={quiz} key={quiz._id.toString()} />
      ))}

      <FacultyOnly>
        {quizzes.length < 1 && <li className='list-group-item p-3 ps-5'>Click "Add Quiz" button.</li>}
      </FacultyOnly>
      
    </ul>
  );
}

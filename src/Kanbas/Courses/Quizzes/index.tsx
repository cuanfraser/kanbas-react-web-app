import { useEffect } from 'react';
import { useParams } from 'react-router';
import QuizzesControls from './QuizzesControls';
import QuizzesList from './QuizzesList';
import { findQuizzesForCourse } from './client';
import { setQuizzes } from './reducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import FacultyOnly from '../../FacultyOnly';

export default function Quizzes() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);

  useEffect(() => {
    if (cid) {
      findQuizzesForCourse(cid).then((response) => dispatch(setQuizzes(response)));
    }
  }, [cid, dispatch]);

  return (
    <div id='wd-quizzes' className='text-nowrap'>
      <FacultyOnly>
        <QuizzesControls />
      </FacultyOnly>

      <hr />
      <QuizzesList quizzes={quizzes} />
    </div>
  );
}

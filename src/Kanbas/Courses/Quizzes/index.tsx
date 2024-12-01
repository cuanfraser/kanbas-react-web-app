import { useEffect } from 'react';
import { useParams } from 'react-router';
import QuizzesControls from './QuizzesControls';
import QuizzesList from './QuizzesList';
import { findQuizzesForCourse } from './client';
import { setQuizzes } from './reducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Quizzes() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);

  useEffect(() => {
    const fetchQuizzes = async (courseId: string) => {
      const quizzes = await findQuizzesForCourse(courseId);
      dispatch(setQuizzes(quizzes));
    };
    fetchQuizzes(cid as string);
  }, [cid, dispatch]);

  return (
    <div id='wd-quizzes' className='text-nowrap'>
      <QuizzesControls />
      <QuizzesList quizzes={quizzes} />
    </div>
  );
}

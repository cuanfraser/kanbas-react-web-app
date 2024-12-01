import { useEffect } from 'react';
import { useParams } from 'react-router';
import QuizzesControls from './QuizzesControls';
import QuizzesList from './QuizzesList';
import { findQuizzesForCourse } from './client';
import { setQuizzes } from './reducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Quizzes() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);

  useEffect(() => {
    const fetchQuizzes = async (courseId: String) => {
      const quizzes = await findQuizzesForCourse(courseId);
      dispatch(setQuizzes(quizzes));
    };
    fetchQuizzes(cid as String);
  }, [cid, dispatch]);

  return (
    <div id='wd-quizzes' className='text-nowrap'>
      <QuizzesControls />
      <QuizzesList quizzes={quizzes} />
    </div>
  );
}

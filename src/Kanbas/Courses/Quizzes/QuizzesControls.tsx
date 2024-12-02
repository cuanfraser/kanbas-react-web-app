import { useDispatch } from 'react-redux';
import { createQuiz } from './client';
import { addQuiz } from './reducer';
import { useNavigate, useParams } from 'react-router';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function QuizzesControls() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid } = useParams();

  const createDefaultQuiz = async () => {
    const defaultQuiz = { title: 'New Quiz', published: false };
    const createdQuiz = await createQuiz(cid as string, defaultQuiz);
    dispatch(addQuiz(createdQuiz));
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${createdQuiz._id}/edit`);
  };

  return (
    <div id='wd-quizzes-controls' className='d-flex justify-content-end gap-2 m-2'>
      <button className='btn btn-danger' onClick={createDefaultQuiz}>
        + Quiz
      </button>
      <button className='btn btn-secondary fs-5'>
        <BsThreeDotsVertical />
      </button>
    </div>
  );
}

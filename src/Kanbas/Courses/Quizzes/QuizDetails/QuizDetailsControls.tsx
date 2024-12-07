import { useNavigate, useParams } from 'react-router';
import { FaPencilAlt } from 'react-icons/fa';

export default function QuizDetailsControls() {
  const navigate = useNavigate();
  const { cid, quizId } = useParams();

  const navigateToPreview = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/preview`);
  };

  const navigateToEditor = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/edit`);
  };

  return (
    <div id='wd-quiz-details-controls' className='d-flex justify-content-center gap-4 m-1'>
      <button className='btn btn-secondary' onClick={navigateToPreview}>
        Preview
      </button>
      <button className='btn btn-secondary d-flex align-items-center' onClick={navigateToEditor}>
        <FaPencilAlt className='me-2 ms-1' />
        Edit
      </button>
    </div>
  );
}

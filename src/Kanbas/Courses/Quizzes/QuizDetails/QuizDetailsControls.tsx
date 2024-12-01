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
    <div id='wd-quiz-details-controls' className='d-flex justify-content-end gap-2 m-2'>
      <button className='btn btn-secondary' onClick={navigateToPreview}>
        Preview
      </button>
      <button className='btn btn-secondary fs-5' onClick={navigateToEditor}>
        <FaPencilAlt />
        Edit
      </button>
    </div>
  );
}

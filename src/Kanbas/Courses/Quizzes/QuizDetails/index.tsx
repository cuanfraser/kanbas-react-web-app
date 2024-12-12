import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { findQuizById } from '../client';
import QuizDetailsControls from './QuizDetailsControls';
import { Quiz } from '../types';
import QuizDetailsField from './QuizDetailsField';
import { Question } from '../Questions/types';
import { findQuestionsForQuiz } from '../Questions/client';
import FacultyOnly from '../../../FacultyOnly';
import StudentOnly from '../../../StudentOnly';
import { findCurrentUserLatestAttemptForQuiz } from '../Attempts/client';

export default function QuizDetails() {
  const { cid, quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz>({} as Quiz);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [attempted, setAttempted] = useState<boolean>(false);
  const [attemptsCount, setAttemptsCount] = useState<number>(0);

  const fieldsMap = new Map<string, string | number>([
    ['Quiz Type', quiz.type],
    ['Points', questions ? questions.reduce((acc, curr) => acc + curr.points, 0) : 0],
    ['Assignment Group', quiz.group],
    ['Shuffle Answers', quiz.shuffle ? 'Yes' : 'No'],
    ['Time Limit', quiz.time ? `${quiz.time} minutes` : ''],
    ['Multiple Attempts', quiz.multiple_attempts ? 'Yes' : 'No'],
    ['Show Correct Answers', quiz.show_correct],
    ['One Question at a Time', quiz.one_question_at_a_time ? 'Yes' : 'No'],
    ['Webcame Requred', quiz.webcam ? 'Yes' : 'No'],
    ['Lock Questions After Answering', quiz.lock_after_answers ? 'Yes' : 'No'],
    ['Access Code', quiz.access_code],
  ]);

  const isAvailable = () => {
    if (quiz) {
      if (!quiz.available || !quiz.available_until) {
        return false;
      }

      const currentDate = new Date();
      const available = new Date(quiz.available);
      const availableUntil = new Date(quiz.available_until);
      if (currentDate > availableUntil) {
        return false;
      }
      if (available < currentDate && currentDate < availableUntil) {
        return true;
      }
      if (currentDate < available) {
        return true;
      }
      return false;
    }
  };

  const hasAttemptsLeft = () => {
    if (quiz) {
      if (quiz.multiple_attempts && quiz.attempts && quiz.attempts > attemptsCount) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (quizId) {
      const fetchQuiz = async (quizId: string) => {
        const quizResponse = await findQuizById(quizId);
        setQuiz(quizResponse);
        findQuestionsForQuiz(quizResponse._id).then((response) => setQuestions(response));
      };
      fetchQuiz(quizId as string);
      findCurrentUserLatestAttemptForQuiz(quizId).then((latestAttempt) => {
        if (latestAttempt && latestAttempt.submitted) {
          setAttempted(true);
          setAttemptsCount(latestAttempt.number);
        }
      });
    }
  }, [quizId]);

  return (
    <div id='wd-quiz-details'>
      <FacultyOnly>
        <QuizDetailsControls />
        <hr />
      </FacultyOnly>

      <div>
        <h2>{quiz.title}</h2>

        <table className=''>
          <tbody className='quiz-details-fields'>
            {Array.from(fieldsMap).map(([key, value]) => (
              <QuizDetailsField key={key} label={key} value={value} />
            ))}
          </tbody>
        </table>

        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Due</th>
              <th scope='col'>Available from</th>
              <th scope='col'>Until</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{quiz.due ? new Date(quiz.due).toLocaleString() : ''}</td>
              <td>{quiz.available ? new Date(quiz.available).toLocaleString() : ''}</td>
              <td>{quiz.available_until ? new Date(quiz.available_until).toLocaleString() : ''}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <StudentOnly>
        <div className='d-flex justify-content-center mt-2'>
          {isAvailable() && hasAttemptsLeft() && (
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/attempt`)}>
              Take the Quiz
            </button>
          )}
          {attempted && (
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/last`)}>
              See Last Attempt
            </button>
          )}
        </div>
      </StudentOnly>
    </div>
  );
}

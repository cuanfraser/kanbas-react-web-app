import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { findQuizById } from '../client';
import QuizDetailsControls from './QuizDetailsControls';
import { Quiz } from '../types';
import QuizDetailsField from './QuizDetailsField';

export default function QuizDetails() {
  const { cid } = useParams();
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState<Quiz>({} as Quiz);

  const fieldsMap = new Map<string, string | number>([
    ['Quiz Type', quiz.type],
    ['Points', quiz.points],
    ['Assignment Group', quiz.group],
    ['Shuffle Answers', quiz.shuffle ? 'Yes' : 'No'],
    ['Time Limit', quiz.time],
    ['Multiple Attempts', quiz.multiple_attempts ? 'Yes' : 'No'],
    ['Show Correct Answers', quiz.show_correct ? 'Yes' : 'No'],
    ['One Question at a Time', quiz.one_question_at_a_time ? 'Yes' : 'No'],
    ['Webcame Requred', quiz.webcam ? 'Yes' : 'No'],
    ['Lock Questions After Answering', quiz.lock_after_answers ? 'Yes' : 'No'],
  ]);

  useEffect(() => {
    const fetchQuiz = async (quizId: string) => {
      const quiz = await findQuizById(quizId);
      setQuiz(quiz);
    };
    fetchQuiz(quizId as string);
  }, [cid, quizId]);

  return (
    <div id='wd-quiz-details'>
      <QuizDetailsControls />
      <hr />
      <div>
        <h2>{quiz.title}</h2>

        <table className=''>
          <tbody className='quiz-details-fields'>
            {Array.from(fieldsMap).map(([key, value]) => (
              <QuizDetailsField label={key} value={value} />
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
    </div>
  );
}

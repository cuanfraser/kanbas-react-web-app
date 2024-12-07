import { Dispatch, SetStateAction } from 'react';
import { EMPTY_QUESTION, Question } from '../Questions/types';
import { Quiz } from '../types';
import { createQuestion } from '../Questions/client';
import QuestionEditor from './QuestionEditor';

export default function QuizQuestionsEditor({
  quiz,
  questions,
  setQuestions,
}: {
  quiz: Quiz;
  questions: Question[];
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}) {
  const handleAddNewQuestion = async () => {
    const defaultQuestion = { ...EMPTY_QUESTION };
    const newQuestion = await createQuestion(quiz._id, defaultQuestion);
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div id='quiz-questions-editor'>
      <ul className='list-group m-2'>
        {questions.map((question) => (
          <QuestionEditor questionId={question._id} key={question._id} />
        ))}

        <li className='list-group-item p-3 ps-5 d-flex justify-content-center'>
          <button className='btn btn-secondary' onClick={handleAddNewQuestion}>
            + New Question
          </button>
        </li>
      </ul>
    </div>
  );
}

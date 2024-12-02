import { Dispatch, SetStateAction } from 'react';
import { Question } from '../Questions/types';
import { Quiz } from '../types';
import { createQuestion } from '../Questions/client';

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
    const defaultQuestion = { title: 'New Question' } as Question;
    const newQuestion = await createQuestion(quiz._id, defaultQuestion);
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div id='quiz-questions-editor'>
      <ul className='list-group m-2'>
        {questions.map((question) => (
          <li key={question._id} className='list-group-item'></li>
        ))}

        {questions.length < 1 && (
          <li className='list-group-item p-3 ps-5'>
            <button className='btn btn-secondary' onClick={handleAddNewQuestion}>
              + New Question
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

import { Dispatch, SetStateAction } from 'react';
import { Question } from '../../Questions/types';

export default function MultipleChoiceEditor({
  question,
  setQuestion,
}: {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
}) {
  return (
    <div>
      <div>Enter your question and multiple answers, then select the one correct answer.</div>

      <div className='question-editor-multiple-question'>
        <h4>Question:</h4>
        <textarea
          className='form-control mb-3'
          value={question.question}
          onChange={(e) => setQuestion({ ...question, question: e.target.value })}
        />
      </div>

      <div className='question-editor-multiple-points'>
        <label htmlFor={`${question._id}-points`}>Points</label>
        <input
          className='form-control'
          id={`${question._id}-points`}
          type='number'
          value={question.points}
          onChange={(e) => setQuestion({ ...question, points: e.target.valueAsNumber })}
        />
      </div>

      <div className='question-editor-multiple-answers'>
        <h4>Answers:</h4>
      </div>
    </div>
  );
}

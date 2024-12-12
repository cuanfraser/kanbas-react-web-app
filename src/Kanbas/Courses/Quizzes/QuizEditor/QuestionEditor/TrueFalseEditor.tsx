import { Dispatch, SetStateAction } from 'react';
import { Question } from '../../Questions/types';
import Editor from 'react-simple-wysiwyg';

export default function TrueFalseEditor({
  question,
  setQuestion,
}: {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
}) {
  return (
    <div className='my-2'>
      <div>Enter your question text, then select if True or False is the correct answer.</div>

      <div className='question-editor-true-false-question'>
        <h4>Question:</h4>
        <Editor
          className='form-control mb-3'
          value={question.question}
          onChange={(e) => setQuestion({ ...question, question: e.target.value })}
        />
      </div>

      <div className='question-editor-true-false-answers'>
        <h4>Answers:</h4>
        <p>Select single correct answer</p>

        <div key={`${question._id}-choice-true`} className='form-check'>
          <input
            type='radio'
            className='form-check-input'
            id={`${question._id}-answer-choice-true`}
            name={`${question._id}-answer-choice`}
            value='true'
            checked={question.answer === 'true'}
            onChange={() => setQuestion({ ...question, answer: 'true' })}
          />
          <label htmlFor={`${question._id}-answer-choice-true`} className='form-check-label'>
            True
          </label>
        </div>

        <div key={`${question._id}-choice-false`} className='form-check'>
          <input
            type='radio'
            className='form-check-input'
            id={`${question._id}-answer-choice-false`}
            name={`${question._id}-answer-choice`}
            value='false'
            checked={question.answer === 'false'}
            onChange={() => setQuestion({ ...question, answer: 'false' })}
          />
          <label htmlFor={`${question._id}-answer-choice-false`} className='form-check-label'>
            False
          </label>
        </div>
      </div>
    </div>
  );
}

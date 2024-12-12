export default function TrueFalseAnswers({
  questionId,
  answer,
  setAnswer,
}: {
  questionId: string;
  answer: string;
  setAnswer: (newAnswer: string) => void;
}) {
  return (
    <div className=''>
      <div className='form-check'>
        <input
          type='radio'
          className='form-check-input'
          id={`${questionId}-answer-choice-true`}
          name={`${questionId}-answer-choice`}
          value='true'
          checked={answer === 'true'}
          onChange={() => setAnswer('true')}
        />
        <label htmlFor={`${questionId}-answer-choice-true`} className='form-check-label'>
          True
        </label>
      </div>

      <div className='form-check'>
        <input
          type='radio'
          className='form-check-input'
          id={`${questionId}-answer-choice-false`}
          name={`${questionId}-answer-choice`}
          value='false'
          checked={answer === 'false'}
          onChange={() => setAnswer('false')}
        />
        <label htmlFor={`${questionId}-answer-choice-false`} className='form-check-label'>
          False
        </label>
      </div>
    </div>
  );
}

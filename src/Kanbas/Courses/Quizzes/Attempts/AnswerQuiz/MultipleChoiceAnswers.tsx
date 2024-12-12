export default function MultipleChoiceAnswers({
  questionId,
  choices,
  answer,
  setAnswer,
}: {
  questionId: string;
  choices: string[];
  answer: string;
  setAnswer: (newAnswer: string) => void;
}) {
  return (
    <div>
      {choices.map((choice, indx) => (
        <div key={`${questionId}-choice-${indx}`} className='form-check'>
          <input
            type='radio'
            className='form-check-input'
            id={`${questionId}-answer-choice-${indx}`}
            name={`${questionId}-answer-choice`}
            value={indx}
            checked={answer === choices[indx]}
            onChange={() => setAnswer(choice)}
          />
          <label htmlFor={`${questionId}-answer-choice-${indx}`} className='form-check-label'>
            {choice}
          </label>
        </div>
      ))}
    </div>
  );
}

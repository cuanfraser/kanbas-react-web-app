import { Dispatch, SetStateAction } from 'react';
import { Question } from '../../Questions/types';

export default function FillInEditor({
  question,
  setQuestion,
}: {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
}) {
  const handleAddAnotherAnswer = () => {
    setQuestion({ ...question, choices: [...question.choices, ''] });
  };

  const handleChoiceChange = (text: string, indx: number) => {
    const newChoices = [...question.choices];
    newChoices[indx] = text;
    setQuestion({ ...question, choices: newChoices });
  };

  const handleCorrectAnswerChange = (choiceIndx: number) => {
    setQuestion({ ...question, answer: question.choices[choiceIndx] });
  };

  return (
    <div className='my-2'>
      <div>Enter your question text, then define all possible correct answers for the blank.</div>
      <div>Students will see the question followed by a small text box to type their answer.</div>

      <div className='question-editor-fill-in-question'>
        <h4>Question:</h4>
        <textarea
          className='form-control mb-3'
          value={question.question}
          onChange={(e) => setQuestion({ ...question, question: e.target.value })}
        />
      </div>

      <div className='question-editor-fill-in-answers'>
        <h4>Answers:</h4>
        <p>Select single correct answer</p>
        {question.choices.map((choice, indx) => (
          <div key={`${question._id}-choice-${indx}`} className='form-check'>
            <input
              type='radio'
              className='form-check-input'
              id={`${question._id}-answer-choice-${indx}`}
              name={`${question._id}-answer-choice`}
              value={indx}
              checked={question.answer === question.choices[indx]}
              onChange={() => handleCorrectAnswerChange(indx)}
            />
            <label htmlFor={`${question._id}-answer-choice-${indx}`} className='form-check-label'>
              <input
                type='text'
                className='form-control mb-2'
                value={question.choices[indx]}
                onChange={(e) => handleChoiceChange(e.target.value, indx)}
              />
            </label>
          </div>
        ))}

        <button type='button' className='btn text-danger' onClick={handleAddAnotherAnswer}>
          + Add Another Answer
        </button>
      </div>
    </div>
  );
}

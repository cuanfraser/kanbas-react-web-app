import { Dispatch, SetStateAction } from 'react';
import { Question } from '../../Questions/types';

export default function MultipleChoiceEditor({
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

      <div className='question-editor-multiple-answers'>
        <h4>Answers:</h4>
        {question.choices.map((choice, indx) => (
          <div key={`${question._id}-choice-${indx}`}>
            <input
              type='radio'
              className='form-check-input'
              name={`${question._id}-answer-choice`}
              value={indx}
              checked={question.answer === question.choices[indx]}
              onChange={() => handleCorrectAnswerChange(indx)}
            />
            <input
              type='text'
              className='form-control mb-2'
              value={question.choices[indx]}
              onChange={(e) => handleChoiceChange(e.target.value, indx)}
            />
          </div>
        ))}

        <button type='button' className='btn text-danger' onClick={handleAddAnotherAnswer}>
          + Add Another Answer
        </button>
      </div>
    </div>
  );
}

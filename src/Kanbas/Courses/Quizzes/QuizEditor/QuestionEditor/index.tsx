import { useEffect, useState } from 'react';
import { Question, QuestionType } from '../../Questions/types';
import MultipleChoiceEditor from './MultipleChoiceEditor';
import { findQuestionById } from '../../Questions/client';

export default function QuestionEditor({ questionId }: { questionId: string }) {
  const [question, setQuestion] = useState<Question>({
    _id: questionId,
    title: '',
    points: 0,
    question: '',
    type: QuestionType.MULTIPLE_CHOICE,
    choices: [],
    answer: '',
  });

  useEffect(() => {
    if (questionId) {
      findQuestionById(questionId).then((response) => setQuestion(response));
    }
  }, [questionId]);

  return (
    <li className='list-group-item'>
      <form>
        <div className='question-editor-header d-flex my-2 align-items-center justify-content-between gap-2'>
          <input
            id={`${questionId}-question-title-input`}
            className='form-control'
            type='text'
            value={question.title}
            required={true}
            placeholder='Question Title'
            onChange={(e) => setQuestion({ ...question, title: e.target.value })}
          />

          <select
            id={`${questionId}-question-type-select`}
            className='form-select'
            value={question.type}
            required={true}
            onChange={(e) => setQuestion({ ...question, type: e.target.value as QuestionType })}>
            <option value={QuestionType.MULTIPLE_CHOICE}>Multiple Choice</option>
            <option value={QuestionType.TRUE_FALSE}>True or False</option>
            <option value={QuestionType.FILL_IN}>Fill in the Blank</option>
          </select>

          <div className='d-flex'>
            <label
              htmlFor={`${questionId}-question-points-input`}
              className='col-form-label me-1'>
              Points
            </label>
            <div className=''>
              <input
                id={`${questionId}-question-points-input`}
                className='form-control'
                inputMode='numeric'
                value={question.points}
                required={true}
                onChange={(e) => setQuestion({ ...question, points: e.target.valueAsNumber })}
              />
            </div>
          </div>
        </div>

        <hr />

        {question && question.type === QuestionType.MULTIPLE_CHOICE && (
          <MultipleChoiceEditor question={question} setQuestion={setQuestion} />
        )}
      </form>
    </li>
  );
}

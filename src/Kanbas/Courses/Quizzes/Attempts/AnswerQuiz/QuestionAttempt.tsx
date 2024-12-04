import { useDispatch } from 'react-redux';
import { Question, QuestionType } from '../../Questions/types';
import MultipleChoiceAnswers from './MultipleChoiceAnswers';
import { useEffect, useState } from 'react';
import { addQuestionAttempt } from '../reducer';
import TrueFalseAnswers from './TrueFalseAnswers';

export default function QuestionPrompt({ question }: { question: Question }) {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    if (question) {
      dispatch(addQuestionAttempt({ question_id: question._id, answer: answer }));
    }
  }, [answer, dispatch, question]);

  if (question) {
    return (
      <div className='question-attempt'>
        <div className='d-flex justify-content-between'>
          <h4>{question.title}</h4>
          <span className='fw-semibold'>{question.points} pts</span>
        </div>

        <hr />
        <p>{question.question}</p>

        <hr />

        {question.type === QuestionType.MULTIPLE_CHOICE && (
          <MultipleChoiceAnswers
            questionId={question._id}
            choices={question.choices}
            answer={answer}
            setAnswer={setAnswer}
          />
        )}
        {question.type === QuestionType.TRUE_FALSE && (
          <TrueFalseAnswers questionId={question._id} answer={answer} setAnswer={setAnswer} />
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

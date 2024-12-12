import { useDispatch, useSelector } from 'react-redux';
import { Question, QuestionType } from '../../Questions/types';
import MultipleChoiceAnswers from './MultipleChoiceAnswers';
import { useEffect, useState } from 'react';
import { addQuestionAttempt } from '../reducer';
import TrueFalseAnswers from './TrueFalseAnswers';
import FillInAnswers from './FillInAnswers';
import { QuestionAttempt } from '../types';
import { RootState } from '../../../../store';

export default function QuestionPrompt({ question }: { question: Question }) {
  const dispatch = useDispatch();
  const { quizAttempt } = useSelector((state: RootState) => state.quizAttemptReducer);
  const [questionAttempt, setQuestionAttempt] = useState<QuestionAttempt>({
    question_id: '',
    answer: '',
  });

  useEffect(() => {
    if (question) {
      if (questionAttempt.question_id !== question._id) {
        dispatch(addQuestionAttempt(questionAttempt));
        const foundAttempt = quizAttempt.answers.find(
          (current) => current.question_id === question._id
        );
        if (foundAttempt) {
          setQuestionAttempt(foundAttempt);
        } else {
          setQuestionAttempt({ question_id: question._id, answer: '' });
        }
      }
      dispatch(addQuestionAttempt(questionAttempt));
    }
  }, [questionAttempt, dispatch, question, quizAttempt.answers]);

  const setAnswer = (newAnswer: string) => {
    setQuestionAttempt({ ...questionAttempt, answer: newAnswer });
  };

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
            answer={questionAttempt.answer}
            setAnswer={setAnswer}
          />
        )}
        {question.type === QuestionType.TRUE_FALSE && (
          <TrueFalseAnswers
            questionId={question._id}
            answer={questionAttempt.answer}
            setAnswer={setAnswer}
          />
        )}
        {question.type === QuestionType.FILL_IN && (
          <FillInAnswers
            questionId={question._id}
            answer={questionAttempt.answer}
            setAnswer={setAnswer}
          />
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

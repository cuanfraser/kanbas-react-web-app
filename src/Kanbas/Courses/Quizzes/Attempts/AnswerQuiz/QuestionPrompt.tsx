import { useDispatch, useSelector } from 'react-redux';
import { Question, QuestionType } from '../../Questions/types';
import MultipleChoiceAnswers from './MultipleChoiceAnswers';
import { useEffect, useState } from 'react';
import { addQuestionAttempt } from '../reducer';
import TrueFalseAnswers from './TrueFalseAnswers';
import FillInAnswers from './FillInAnswers';
import { QuestionAttempt } from '../types';
import { RootState } from '../../../../store';

export default function QuestionPrompt({
  question,
  showResults,
}: {
  question: Question;
  showResults: boolean;
}) {
  const dispatch = useDispatch();
  const { quizAttempt } = useSelector((state: RootState) => state.quizAttemptReducer);
  const [questionAttempt, setQuestionAttempt] = useState<QuestionAttempt>({
    question_id: '',
    answer: '',
    correct: false,
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
          setQuestionAttempt({ question_id: question._id, answer: '', correct: false });
        }
      }
      dispatch(addQuestionAttempt(questionAttempt));
    }
  }, [questionAttempt, dispatch, question, quizAttempt.answers]);

  const setAnswer = (newAnswer: string) => {
    if (!showResults) {
      setQuestionAttempt({ ...questionAttempt, answer: newAnswer });
    }
  };

  const getScoreText = () => {
    if (showResults) {
      if (questionAttempt.correct) {
        return `${question.points} / ${question.points} pts`;
      } else {
        return `0 / ${question.points} pts`;
      }
    } else {
      return `${question.points} pts`;
    }
  };

  if (question) {
    return (
      <div className='question-attempt'>
        <div className='d-flex justify-content-between'>
          <h4>{question.title}</h4>
          <span className='fw-semibold'>{getScoreText()}</span>
        </div>

        <hr />
        <p>{question.question}</p>

        <hr />

        {showResults && questionAttempt.correct && (
          <div className='alert alert-success' role='alert'>
            Correct Answer.
          </div>
        )}

        {showResults && !questionAttempt.correct && (
          <div className='alert alert-danger' role='alert'>
            Incorrect Answer.
          </div>
        )}

        {question.type === QuestionType.MULTIPLE_CHOICE && (
          <MultipleChoiceAnswers
            questionId={question._id}
            choices={question.choices}
            answer={questionAttempt.answer}
            setAnswer={setAnswer}
            showResults={showResults}
          />
        )}
        {question.type === QuestionType.TRUE_FALSE && (
          <TrueFalseAnswers
            questionId={question._id}
            answer={questionAttempt.answer}
            setAnswer={setAnswer}
            showResults={showResults}
          />
        )}
        {question.type === QuestionType.FILL_IN && (
          <FillInAnswers
            questionId={question._id}
            answer={questionAttempt.answer}
            setAnswer={setAnswer}
            showResults={showResults}
          />
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

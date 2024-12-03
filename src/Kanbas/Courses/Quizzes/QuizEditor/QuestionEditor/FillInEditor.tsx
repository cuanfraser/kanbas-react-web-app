import { Dispatch, SetStateAction } from 'react';
import { Question } from '../../Questions/types';

export default function FillInEditor({
  question,
  setQuestion,
}: {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
}) {
  return <div></div>;
}

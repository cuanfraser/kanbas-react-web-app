export default function FillInAnswers({
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
      <input
        type='text'
        className='form-control'
        value={answer}
        placeholder='Fill in answer here'
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}

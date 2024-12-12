export default function FillInAnswers({
  questionId,
  answer,
  setAnswer,
  showResults,
}: {
  questionId: string;
  answer: string;
  setAnswer: (newAnswer: string) => void;
  showResults: boolean;
}) {
  return (
    <div className=''>
      <input
        type='text'
        className='form-control'
        value={answer}
        placeholder='Fill in answer here'
        disabled={showResults}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}

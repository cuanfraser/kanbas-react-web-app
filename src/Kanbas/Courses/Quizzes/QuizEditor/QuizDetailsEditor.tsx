import { Quiz } from '../types';

export default function QuizDetailsEditor({
  quiz,
  setQuiz,
}: {
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
}) {
  return (
    <form id='quiz-details-editor'>
      <input
        id='quiz-title'
        type='text'
        value={quiz.title}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
      />
    </form>
  );
}

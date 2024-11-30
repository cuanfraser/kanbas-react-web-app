export default function QuizzesList({ quizzes }: { quizzes: any[] }) {
  return (
    <div id='wd-quizzes-list' className='list-group'>
      {quizzes.map((quiz) => (
        <li className='list-group-item p-3 ps-1'></li>
      ))}
    </div>
  );
}

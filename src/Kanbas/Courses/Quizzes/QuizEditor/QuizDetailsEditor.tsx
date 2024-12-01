import { Quiz } from '../types';

export default function QuizDetailsEditor({
  quiz,
  setQuiz,
}: {
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
}) {
  const handleTimeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      setQuiz({ ...quiz, time: 0 });
    } else {
      setQuiz({ ...quiz, time: 20 });
    }
  };

  return (
    <form id='quiz-details-editor' className='m-1'>
      <input
        id='quiz-title'
        className='form-control mb-3'
        type='text'
        value={quiz.title}
        placeholder='Quiz Title'
        required={true}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
      />

      <textarea
        id='quiz-description'
        className='form-control mb-3'
        value={quiz.description}
        placeholder='Quiz Description'
        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
      />

      <div id='quiz-type-group' className='mb-3'>
        <label htmlFor='quiz-type-select' className='form-label'>
          Quiz Type
        </label>
        <select
          id='quiz-type-select'
          className='form-select'
          value={quiz.type}
          required={true}
          onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}>
          <option value='GRADED'>Graded Quiz</option>
          <option value='PRACTICE'>Practice Quiz</option>
          <option value='GRADED_SURVEY'>Graded Survey</option>
          <option value='UNGRADED_SURVEY'>Ungraded Survey</option>
        </select>
      </div>

      <div id='quiz-group-group' className='mb-3'>
        <label htmlFor='quiz-group-select' className='form-label'>
          Assignment Group
        </label>
        <select
          id='quiz-group-select'
          className='form-select'
          value={quiz.group}
          required={true}
          onChange={(e) => setQuiz({ ...quiz, group: e.target.value })}>
          <option value='QUIZZES'>Quizzes</option>
          <option value='EXAMS'>Exams</option>
          <option value='ASSIGNMENTS'>Assignments</option>
          <option value='PROJECT'>Project</option>
        </select>
      </div>

      <div id='quiz-options-group' className='mb-3'>
        <b>Options</b>

        <div id='quiz-shuffle-group' className='mb-2'>
          <input
            id='quiz-shuffle-input'
            className='form-check-input me-2'
            type='checkbox'
            checked={quiz.shuffle}
            onChange={(e) => setQuiz({ ...quiz, shuffle: e.target.checked })}
          />
          <label htmlFor='quiz-shuffle-input' className='form-check-label'>
            Shuffle Answers
          </label>
        </div>

        <div id='quiz-time-group' className='mb-2'>
          <input
            id='quiz-time-checkbox'
            className='form-check-input me-2'
            type='checkbox'
            checked={quiz.time > 0}
            onChange={(e) => handleTimeCheckbox(e)}
          />
          <label htmlFor='quiz-time-checkbox' className='form-check-label'>
            Time Limit
          </label>

          <input
            id='quiz-time-input'
            className='form-control'
            type='number'
            value={quiz.time}
            required={true}
            disabled={quiz.time === 0}
            onChange={(e) => setQuiz({ ...quiz, time: e.target.valueAsNumber })}
          />
          <label htmlFor='quiz-time-input' className='form-check-label'>
            Minutes
          </label>
        </div>

        <div id='quiz-multiple-attempts-group' className='input-group p-2 border rounded'>
          <input
            id='quiz-multiple-attempts-checkbox'
            className='form-check-input me-2'
            type='checkbox'
            checked={quiz.multiple_attempts}
            onChange={(e) => setQuiz({ ...quiz, multiple_attempts: e.target.checked })}
          />
          <label htmlFor='quiz-multiple-attempts-checkbox' className='form-check-label'>
            Allow Multiple Attempts
          </label>
        </div>
      </div>

      <div id='quiz-assign-group' className='mb-3'>
        <label htmlFor='quiz-assign-input-group' className='form-label'>
          Assign
        </label>
        <div id='quiz-assign-input-group' className='border rounded'>
          <div id='quiz-assign-due-group' className='mb-2'>
            <label htmlFor='quiz-due-input' className='form-label'>
              Due
            </label>
            <input
              id='quiz-due-input'
              className='form-control'
              type='datetime'
              value={new Date(quiz.due).toLocaleString()}
              required={true}
              onChange={(e) => setQuiz({ ...quiz, due: new Date(e.target.value) })}
            />
          </div>

          <div id='quiz-assign-available-group' className='mb-2'>
            <label htmlFor='quiz-available-input' className='form-label'>
              Available from
            </label>
            <input
              id='quiz-available-input'
              className='form-control'
              type='datetime'
              value={new Date(quiz.available).toLocaleString()}
              required={true}
              onChange={(e) => setQuiz({ ...quiz, available: new Date(e.target.value) })}
            />
          </div>

          <div id='quiz-assign-available-until-group' className='mb-2'>
            <label htmlFor='quiz-available-until-input' className='form-label'>
              Until
            </label>
            <input
              id='quiz-available-until-input'
              className='form-control'
              type='datetime'
              value={new Date(quiz.available_until).toLocaleString()}
              required={true}
              onChange={(e) => setQuiz({ ...quiz, available_until: new Date(e.target.value) })}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

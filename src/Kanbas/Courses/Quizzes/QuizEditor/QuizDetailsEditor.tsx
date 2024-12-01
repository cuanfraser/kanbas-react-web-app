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

      <div id='quiz-options-group' className='mb-4'>
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

        <div id='quiz-multiple-attempts-group' className='input-group p-2 border rounded mb-2'>
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

        <div id='quiz-show-correct-group' className='input-group mb-2'>
          <input
            id='quiz-show-correct-input'
            className='form-control'
            type='text'
            value={quiz.show_correct}
            placeholder='Show Correct Answers'
            onChange={(e) => setQuiz({ ...quiz, show_correct: e.target.value })}
          />
          <label htmlFor='quiz-show-correct-input' className='form-label'>
            Show Correct Answers
          </label>
        </div>

        <div id='quiz-one-question-group' className='input-group mb-2'>
          <input
            id='quiz-one-question-checkbox'
            className='form-check-input me-2'
            type='checkbox'
            checked={quiz.one_question_at_a_time}
            onChange={(e) => setQuiz({ ...quiz, one_question_at_a_time: e.target.checked })}
          />
          <label htmlFor='quiz-one-question-checkbox' className='form-check-label'>
            One Question at a Time
          </label>
        </div>

        <div id='quiz-webcam-group' className='input-group mb-2'>
          <input
            id='quiz-webcam-checkbox'
            className='form-check-input me-2'
            type='checkbox'
            checked={quiz.webcam}
            onChange={(e) => setQuiz({ ...quiz, webcam: e.target.checked })}
          />
          <label htmlFor='quiz-webcam-checkbox' className='form-check-label'>
            Webcam Required
          </label>
        </div>

        <div id='quiz-lock-questions-group' className='input-group mb-2'>
          <input
            id='quiz-lock-questions-checkbox'
            className='form-check-input me-2'
            type='checkbox'
            checked={quiz.lock_after_answers}
            onChange={(e) => setQuiz({ ...quiz, lock_after_answers: e.target.checked })}
          />
          <label htmlFor='quiz-lock-questions-checkbox' className='form-check-label'>
            Lock Questions After Answering
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

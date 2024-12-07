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

      <div id='quiz-type-group' className='row mb-3'>
        <label htmlFor='quiz-type-select' className='col-sm-2 col-form-label text-sm-end'>
          Quiz Type
        </label>
        <div className='col-sm-10'>
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
      </div>

      <div id='quiz-group-group' className='row mb-3'>
        <label htmlFor='quiz-group-select' className='col-sm-2 col-form-label text-sm-end'>
          Assignment Group
        </label>
        <div className='col-sm-10'>
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
      </div>

      <div id='quiz-options-group' className='row mb-4'>
        <div className='col-sm-2'></div>
        <div className='col-sm-10'>
          <p className='fw-bold'>Options</p>

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

          <div id='quiz-time-group' className='row align-items-center mb-2'>
            <div className='col-auto '>
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
            </div>

            <div className='col-auto'>
              <input
                id='quiz-time-input'
                className='form-control'
                type='number'
                value={quiz.time}
                required={true}
                disabled={quiz.time === 0}
                onChange={(e) => setQuiz({ ...quiz, time: e.target.valueAsNumber })}
              />
            </div>
            <label htmlFor='quiz-time-input' className='col-auto col-form-check-label'>
              Minutes
            </label>
          </div>

          <div id='quiz-multiple-attempts-group' className='mb-2'>
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

          <div id='quiz-show-correct-group' className='row mb-2'>
            <label htmlFor='quiz-show-correct-input' className='col-auto col-form-label'>
              Show Correct Answers
            </label>
            <div className='col-auto'>
              <input
                id='quiz-show-correct-input'
                className='form-control'
                type='text'
                value={quiz.show_correct}
                onChange={(e) => setQuiz({ ...quiz, show_correct: e.target.value })}
              />
            </div>
          </div>

          <div id='quiz-one-question-group' className='mb-2'>
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

          <div id='quiz-webcam-group' className='mb-2'>
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

          <div id='quiz-lock-questions-group' className='mb-2'>
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
      </div>

      <div id='quiz-assign-group' className='row mb-3'>
        <label htmlFor='quiz-assign-input-group' className='col-sm-2 col-form-label text-sm-end'>
          Assign
        </label>
        <div id='quiz-assign-input-group' className='col-sm-10 border rounded p-3'>
          <div id='quiz-assign-due-group' className='mb-2'>
            <label htmlFor='quiz-due-input' className='form-label fw-bold'>
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
            <label htmlFor='quiz-available-input' className='form-label fw-bold'>
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
            <label htmlFor='quiz-available-until-input' className='form-label fw-bold'>
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

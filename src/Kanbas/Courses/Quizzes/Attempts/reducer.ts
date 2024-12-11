import { createSlice } from '@reduxjs/toolkit';
import { QuizAttempt } from './types';

interface QuizAttemptState {
  quizAttempt: QuizAttempt;
}

const initialState: QuizAttemptState = {
  quizAttempt: {
    _id: '',
    quiz_id: '',
    user_id: '',
    answers: [],
    score: 0,
    started: new Date().toString(),
    submitted: false,
  },
};

const quizAttemptSlice = createSlice({
  name: 'quizAttempt',
  initialState,
  reducers: {
    setAttempt: (state, action) => {
      state.quizAttempt = action.payload;
    },

    addQuestionAttempt: (state, { payload: questionAttempt }) => {
      const existingAnswerIndx = state.quizAttempt.answers.findIndex(
        (curr) => curr.question_id === questionAttempt.question_id
      );
      if (existingAnswerIndx === -1) {
        state.quizAttempt.answers.push(questionAttempt);
      } else {
        state.quizAttempt.answers[existingAnswerIndx] = questionAttempt;
      }
    },
  },
});
export const { setAttempt, addQuestionAttempt } = quizAttemptSlice.actions;
export default quizAttemptSlice.reducer;

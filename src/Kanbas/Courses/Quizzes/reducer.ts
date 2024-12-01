import { createSlice } from '@reduxjs/toolkit';
import { Quiz } from './types';

interface QuizState {
  quizzes: Quiz[];
}

const initialState: QuizState = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    addQuiz: (state, { payload: quiz }) => {
      state.quizzes = [...state.quizzes, quiz];
    },

    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((currentQuiz) => currentQuiz._id !== quizId);
    },

    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((currentQuiz) =>
        currentQuiz._id === quiz._id ? quiz : currentQuiz
      );
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, setQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;

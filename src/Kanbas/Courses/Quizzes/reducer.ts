import { createSlice } from '@reduxjs/toolkit';
const initialState = {
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
      state.quizzes = [...state.quizzes, quiz] as any;
    },

    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((currentQuiz: any) => currentQuiz._id !== quizId);
    },
    
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((currentQuiz: any) =>
        currentQuiz._id === quiz._id ? quiz : currentQuiz
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, setQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;

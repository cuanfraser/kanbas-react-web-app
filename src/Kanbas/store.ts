import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './Courses/Modules/reducer';
import accountReducer from './Account/reducer';
import assignmentReducer from './Courses/Assignments/reducer';
import quizzesReducer from './Courses/Quizzes/reducer';
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    quizzesReducer,
  },
});
export default store;

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
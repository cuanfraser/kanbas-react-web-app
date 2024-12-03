import axios from 'axios';
import { QuizAttempt } from './types';
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const ATTEMPTS_API = `${REMOTE_SERVER}/api/attempts`;

export const createAttempt = async (quizId: string, attempt: any) => {
  const { data } = await axiosWithCredentials.post(`${QUIZZES_API}/${quizId}/attempts`, attempt);
  return data;
};

export const findAttemptById = async (attemptId: string) => {
  const { data } = await axiosWithCredentials.get(`${ATTEMPTS_API}/${attemptId}`);
  return data;
};

export const findCurrentUserAttemptsForQuiz = async (quizId: string) => {
  const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/attempts`);
  return data;
};

export const updateAttempt = async (attempt: QuizAttempt) => {
  const { data } = await axiosWithCredentials.put(`${ATTEMPTS_API}/${attempt._id}`, attempt);
  return data;
};

export const deleteAttempt = async (attemptId: string) => {
  const response = await axiosWithCredentials.delete(`${ATTEMPTS_API}/${attemptId}`);
  return response.data;
};

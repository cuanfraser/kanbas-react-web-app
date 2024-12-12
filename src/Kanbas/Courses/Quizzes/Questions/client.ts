import axios from 'axios';
import { Question } from './types';
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const createQuestion = async (quizId: string, question: Question) => {
  const { data } = await axiosWithCredentials.post(`${QUIZZES_API}/${quizId}/questions`, {
    ...question,
    quiz_id: quizId,
  });
  return data;
};

export const findQuestionById = async (questionId: string) => {
  const { data } = await axiosWithCredentials.get(`${QUESTIONS_API}/${questionId}`);
  return data;
};

export const findQuestionsForQuiz = async (quizId: string) => {
  const { data } = await axiosWithCredentials
    .get(`${QUIZZES_API}/${quizId}/questions`)
    .catch((err) => {
      console.log('Failed to find questions for quiz: ', err.message);
      return { data: [] };
    });
  return data;
};

export const updateQuestion = async (question: Question) => {
  const { data } = await axiosWithCredentials.put(`${QUESTIONS_API}/${question._id}`, question);
  return data;
};

export const deleteQuestion = async (questionId: string) => {
  const response = await axiosWithCredentials.delete(`${QUESTIONS_API}/${questionId}`);
  return response.data;
};

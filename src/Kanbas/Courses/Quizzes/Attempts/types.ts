export type QuizAttempt = {
  _id: string;
  quiz_id: string;
  user_id: string;
  answers: [{ question_id: string; answer: string }];
  score: number;
  started: Date;
  submitted: boolean;
};

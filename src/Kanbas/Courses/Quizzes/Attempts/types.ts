export type QuizAttempt = {
  _id: string;
  quiz_id: string;
  user_id: string;
  answers: QuestionAttempt[];
  score: number;
  started: Date;
  submitted: boolean;
};

export type QuestionAttempt = {
  question_id: string;
  answer: string;
};

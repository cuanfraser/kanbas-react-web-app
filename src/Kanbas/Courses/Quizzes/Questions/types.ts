export type Question = {
  _id: string;
  title: string;
  points: number;
  question: string;
  type: QuestionType;
  choices: string[];
  answer: string;
};

export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  FILL_IN = 'FILL_IN',
}

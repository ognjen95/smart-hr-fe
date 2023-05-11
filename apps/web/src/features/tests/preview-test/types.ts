import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";

import { AnswerEntity, QuestionEntity, TestEntity } from "~graphql-api";

type Answers = Omit<AnswerEntity, "id"> & {
  answerId: string;
};

type Questions = Omit<QuestionEntity, "id"> & {
  questionId: string;
  answers: Answers[];
};
export type QuestionModel = {
  questions: Questions[];
};

export type UseTestQuestionListReturn = {
  form: UseFormReturn<QuestionModel>;
  fieldArray: UseFieldArrayReturn<QuestionModel, "questions">;
  test: TestEntity | undefined;
  refetch: () => void;
};

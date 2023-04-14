import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import { UseToggleReturn } from '~hooks/use-toggle';

type Answers = {
  id: string;
  text: string;
  isCorrect: boolean;
  answered: boolean;
};

export type CreateQuestionFormModel = {
  text: string;
  questionGroup: string;
  points: number;
  answers: Answers[];
  // test: Test[]
  // testId: string;
};

export type UseCreateQuestionReturn = {
  form: UseFormReturn<CreateQuestionFormModel>;
  onSubmit: SubmitHandler<CreateQuestionFormModel>;
  isLoading?: boolean;
  modal: UseToggleReturn;
};

export type UseCreateQuestion = () => UseCreateQuestionReturn;
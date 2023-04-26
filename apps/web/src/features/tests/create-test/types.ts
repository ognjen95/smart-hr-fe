import { UseFormReturn } from 'react-hook-form';

export type CreateTestModel = {
  name: string;
  percentageToPass: number;
  timeLimit?: number;
  questionIds: string[];
};

export type UseCreateTestFormReturn = {
  form: UseFormReturn<CreateTestModel>;
};

export type UseCreateTestForm = () => UseCreateTestFormReturn;

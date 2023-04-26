import { ObjectSchema, array, number, object, string } from 'yup';

import { CreateTestModel } from './types';

export const DEFAULT_VALUES: CreateTestModel = {
  name: '',
  percentageToPass: 70,
  timeLimit: 0,
  questionIds: [],
};

export const VALIDATION_SCHEMA: ObjectSchema<CreateTestModel> = object().shape({
  name: string().required('This field is required'),
  percentageToPass: number().required('This field is required'),
  timeLimit: number().optional(),
  questionIds: array()
    .of(string().required())
    .required('This field is required'),
});

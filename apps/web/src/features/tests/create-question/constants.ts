import { generateId } from 'src/helpers/generateId';
import { ObjectSchema, array, bool, number, object, string } from 'yup';

import { CreateQuestionFormModel } from './types';

export const DEFAULT_VALUES: CreateQuestionFormModel = {
  text: '',
  questionGroup: '',
  points: 1,
  answers: [
    { id: generateId(), text: '', isCorrect: false, answered: false },
    { id: generateId(), text: '', isCorrect: false, answered: false },
  ],
};

export const VALIDATION_SCHEMA: ObjectSchema<CreateQuestionFormModel> =
  object().shape({
    text: string().required('This field is required'),
    questionGroup: string().required('This field is required'),
    points: number().required('This field is required'),
    answers: array()
      .of(
        object().shape({
          id: string().required('This field is required'),
          text: string().required('This field is required'),
          isCorrect: bool().required('This field is required'),
          answered: bool().required('This field is required'),
        })
      )
      .required('This field is required'),
  });

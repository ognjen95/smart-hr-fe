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

export const POINTS_OPTIONS = [
  { label: 'Number of points for question', value: ''},
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
];

export const QUESTION_GROUPS_OPTIONS = [
  { label: 'Pick group', value: '' },
  { label: 'Javascript', value: 'javascript' },
  { label: '.NET', value: '.net' },
  { label: 'Java', value: 'java' },
];

import { ObjectSchema, object, string } from 'yup';


export type CreateQuestionGroupModel = {
    name: string
  }
  
export const DEFAULT_VALUES = {
  name: '',
};
export const VALIDATION_SCHEMA: ObjectSchema<CreateQuestionGroupModel> =
  object().shape({
    name: string().required('This field is required'),
  });

import { useFieldArray } from 'react-hook-form';

import useForm from '~hooks/use-form';

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from '../constants';
import { CreateQuestionForm, CreateQuestionFormReturn } from '../types';

const useCreateQuestionForm: CreateQuestionForm =
  (): CreateQuestionFormReturn => {
    const form = useForm({
      defaultValues: DEFAULT_VALUES,
      validationSchema: VALIDATION_SCHEMA,
    });
    const fieldArray = useFieldArray({
      control: form.control,
      name: 'answers',
    });

    return {
      form,
      fieldArray,
    };
  };

export default useCreateQuestionForm;

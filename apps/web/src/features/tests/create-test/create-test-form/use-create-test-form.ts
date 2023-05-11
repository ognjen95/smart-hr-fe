import useForm from "~hooks/use-form";

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "../constants";
import { UseCreateTestForm, UseCreateTestFormReturn } from "../types";

const useCreateTestForm: UseCreateTestForm = (): UseCreateTestFormReturn => {
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });

  return { form };
};

export default useCreateTestForm;

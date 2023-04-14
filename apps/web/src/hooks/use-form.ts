import { yupResolver } from "@hookform/resolvers/yup";
import {
  DeepPartial,
  FieldValues,
  useForm as useReactHookForm,
  UseFormReturn,
} from "react-hook-form";
import { ObjectSchema } from "yup";

type UseFormOptions<TFormValues extends FieldValues = FieldValues> = {
  defaultValues?: DeepPartial<TFormValues>;
  validationSchema?: ObjectSchema<TFormValues>;
  mode?: "all" | "onSubmit";
};

const useForm = <TFormValues extends FieldValues = FieldValues>({
  defaultValues,
  validationSchema,
  mode = "all",
}: UseFormOptions<TFormValues> = {}): UseFormReturn<TFormValues> => {
  const form = useReactHookForm<TFormValues>({
    mode,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  return form;
};

export default useForm;

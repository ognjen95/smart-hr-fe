import {
  Control,
  FieldValues,
  Path,
  useController,
  UseControllerReturn as UseFormControllerReturn,
} from "react-hook-form";

type UseFormControllerOptions<TFormValues extends FieldValues = FieldValues> = {
  fieldName: Path<TFormValues>;
  control: Control<TFormValues>;
};

const useFormController = <TFormValues extends FieldValues = FieldValues>({
  fieldName,
  control,
}: UseFormControllerOptions<TFormValues>): UseFormControllerReturn<TFormValues> => {
  const fieldData = useController<TFormValues>({
    name: fieldName,
    control,
  });

  return fieldData;
};

export type { UseFormControllerOptions };

export default useFormController;

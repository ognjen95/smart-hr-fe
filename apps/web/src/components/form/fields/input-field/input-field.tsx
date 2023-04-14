import { FieldValues } from "react-hook-form";
import { Input, InputProps } from "ui-components";

import useFormController, {
  UseFormControllerOptions,
} from "~hooks/use-form-controller";

export type InputFieldProps<TFormValues extends FieldValues = FieldValues> =
  Omit<InputProps, "onChange"> & UseFormControllerOptions<TFormValues>;

const InputField = <TFormValues extends FieldValues = FieldValues>({
  fieldName,
  control,
  ...inputProps
}: InputFieldProps<TFormValues>) => {
  const {
    field,
    fieldState: { error },
  } = useFormController<TFormValues>({ fieldName, control });

  return <Input {...field} errorMessage={error?.message} {...inputProps} />;
};

export default InputField;

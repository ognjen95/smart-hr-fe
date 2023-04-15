import { FieldValues } from "react-hook-form";
import { InputProps, Select } from "ui-components";

import useFormController, {
  UseFormControllerOptions,
} from "~hooks/use-form-controller";

export type SelectFieldProps<TFormValues extends FieldValues = FieldValues> =
  Omit<InputProps, "onChange"> & UseFormControllerOptions<TFormValues> & { options: { label: string, value: string }[] };

const SelectField = <TFormValues extends FieldValues = FieldValues>({
  fieldName,
  control,
  ...selectProps
}: SelectFieldProps<TFormValues>) => {
  const {
    field,
    fieldState: { error },
  } = useFormController<TFormValues>({ fieldName, control });

  return <Select label={selectProps.label} {...field} errorMessage={error?.message} {...selectProps} />;
};

export default SelectField;

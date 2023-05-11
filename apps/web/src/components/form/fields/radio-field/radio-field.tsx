import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Radio, RadioProps } from "ui-components";

import useFormController from "~hooks/use-form-controller";

export type RadioFieldProps<TFormValues extends FieldValues = FieldValues> =
  RadioProps & {
    fieldName: FieldPath<TFormValues>;
    control: Control<TFormValues>;
    defaultValue?: string | number;
  };

const RadioField = <TFormValues extends FieldValues = FieldValues>({
  fieldName,
  control,
  ...props
}: RadioFieldProps<TFormValues>) => {
  const {
    field,
    fieldState: { error },
  } = useFormController<TFormValues>({ fieldName, control });

  return <Radio {...field} errorMessage={error?.message} {...props} />;
};

export default RadioField;

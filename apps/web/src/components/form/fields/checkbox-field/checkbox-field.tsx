import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { Checkbox, CheckboxProps } from "ui-components";

import useFormController, { UseFormControllerOptions } from "~hooks/use-form-controller";


export type CheckboxFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<CheckboxProps, "onChange"> & { customValue?: string } &
  UseFormControllerOptions<TFormValues>;

const CheckboxField = <TFormValues extends FieldValues = FieldValues>({
  fieldName,
  control,
  customValue,
  ...fieldProps
}: CheckboxFieldProps<TFormValues>) => {
  const {
    field,
    fieldState: { error },
  } = useFormController<TFormValues>({ fieldName, control });

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (customValue) {
      setChecked(field.value === customValue)
    }
  }, [customValue, field.value])

  return (
    <Checkbox
      {...fieldProps}
      {...field}
      {...(customValue && {
        onChange: () => {
          if (customValue === field.value) {
            field.onChange(undefined)
            setChecked(false)
            return
          }
          if (customValue !== field.value) {
            field.onChange(customValue)
            setChecked(true)
          }
        },
        checked,
        value: checked ? customValue : undefined,
      })}
      errorMessage={error?.message}
    />
  );
};

export default CheckboxField;

import { FieldValues } from "react-hook-form";
import { Checkbox, CheckboxProps } from "ui-components";

import useFormController, { UseFormControllerOptions } from "~hooks/use-form-controller";


export type CheckboxFieldProps<
    TFormValues extends FieldValues = FieldValues
> = Omit<CheckboxProps, "onChange"> &
    UseFormControllerOptions<TFormValues>;

const CheckboxField = <TFormValues extends FieldValues = FieldValues>({
    fieldName,
    control,
    ...fieldProps
}: CheckboxFieldProps<TFormValues>) => {
    const {
        field,
        fieldState: { error },
    } = useFormController<TFormValues>({ fieldName, control });

    return (
        <Checkbox
            {...fieldProps}
            {...field}
            errorMessage={error?.message}
        />
    );
};

export default CheckboxField;

import { FieldValues } from "react-hook-form";
import { FileUploadInput, FileUploadInputProps } from "ui-components";

import useFormController, {
  UseFormControllerOptions,
} from "../../../../hooks/use-form-controller";

export type FileUploadInputFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<FileUploadInputProps, "onChange"> &
  UseFormControllerOptions<TFormValues>;

const FileUploadInputField = <TFormValues extends FieldValues = FieldValues>({
  fieldName,
  control,
  ...fileUploadInputProps
}: FileUploadInputFieldProps<TFormValues>) => {
  const {
    field,
    fieldState: { error },
  } = useFormController<TFormValues>({ fieldName, control });

  return (
    <FileUploadInput
      {...fileUploadInputProps}
      {...field}
      errorMessage={error?.message}
    />
  );
};

export default FileUploadInputField;

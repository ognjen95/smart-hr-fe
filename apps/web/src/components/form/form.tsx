import { ReactElement } from "react";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

export type FormProps<TFormValues extends FieldValues = FieldValues> = {
  form: UseFormReturn<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => ReactElement;
  formName?: string;
  onSubmit?: SubmitHandler<TFormValues>;
};

const Form = <TFormValues extends FieldValues = FieldValues>({
  formName,
  form,
  onSubmit = () => {},
  children,
}: FormProps<TFormValues>) => (
  <form id={formName} onSubmit={form.handleSubmit(onSubmit)}>
    {children(form)}
  </form>
);

export default Form;

import { useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";

import useForm from "~hooks/use-form";
import useToggle from "~hooks/use-toggle";

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "../constants";
import { CreateQuestionFormModel } from "../types";

import { useCreateQuestionMutation } from "~graphql-api";

const useCreateQuestion = () => {
  const { isOpen, open, close, toggle } = useToggle();
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });
  const fieldArray = useFieldArray({
    control: form.control,
    name: "answers",
  });

  const [createQuestion] = useCreateQuestionMutation();

  const onSubmit = (data: CreateQuestionFormModel) => {
    createQuestion({
      onError: ({ graphQLErrors: [{ message }] }) => {
        close();
        toast.error(message ?? "There was problem with creating question");
      },
      onCompleted: () => {
        form.reset();
        toast.success("Question successfully created");
        close();
      },
      variables: {
        createQuestionInput: {
          text: data.text,
          answers: data.answers,
          points: data.points,
          questionGroup: data.questionGroup,
        },
      },
    });
  };

  const handleOpen = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      open();
    }
  };

  return {
    form,
    fieldArray,
    onSubmit,
    modal: {
      open: handleOpen,
      isOpen,
      close,
      toggle,
    },
  };
}

export default useCreateQuestion
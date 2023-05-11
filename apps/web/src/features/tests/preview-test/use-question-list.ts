import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";

import useForm from "~hooks/use-form";

import { QuestionModel, UseTestQuestionListReturn } from "./types";

import {
  FindTestByIdDocument,
  useFindTestByIdQuery,
  useUpdateQuestionMutation,
} from "~graphql-api";

const DEFAULT_VALUES: QuestionModel = {
  questions: [],
};

const useTestQuestionList = (): UseTestQuestionListReturn => {
  const { query } = useRouter();
  const { data } = useFindTestByIdQuery({
    variables: {
      findTestByIdId: query.testId as string,
    },
  });

  const [submitAnswer, { loading }] = useUpdateQuestionMutation();

  const test = data?.findTestById;
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const handleSubmit = async (selectedAnswer: string, questionId: string) => {
    const answeredIds = [];

    answeredIds.push(selectedAnswer);

    if (!answeredIds.length) {
      toast.error("Please select an answer");
      return;
    }

    await submitAnswer({
      variables: {
        updateQuestionInput: {
          id: questionId,
          answeredIds,
        },
      },
      awaitRefetchQueries: true,
      refetchQueries: [FindTestByIdDocument],
      onCompleted: () => {
        toast.success("Answer submitted");
      },
    });
  };

  useEffect(() => {
    if (test) {
      const questions: QuestionModel["questions"] = test.questions.map(
        ({ id, text, answerType, points, answers }) => ({
          id,
          questionId: id,
          text,
          answerType,
          points,
          answers:
            answers?.map(
              ({ id: answerId, text: answerText, answered, isCorrect }) => ({
                id: answerId,
                answerId,
                text: answerText,
                answered,
                isCorrect,
              })
            ) ?? [],
        })
      );

      form.setValue("questions", questions);
    }
  }, [form, test]);

  return { form, fieldArray, test, handleAnswer: handleSubmit, loading };
};

export default useTestQuestionList;

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";

import useForm from "~hooks/use-form";

import { QuestionModel, UseTestQuestionListReturn } from "./types";

import { useFindTestByIdQuery } from "~graphql-api";

const DEFAULT_VALUES: QuestionModel = {
  questions: [],
};

const useTestQuestionList = (): UseTestQuestionListReturn => {
  const { query } = useRouter();
  const { data, refetch } = useFindTestByIdQuery({
    variables: {
      findTestByIdId: query.testId as string,
    },
  });

  const test = data?.findTestById;
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "questions",
  });

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

      console.log({ questions });

      form.setValue("questions", questions);
    }
  }, [form, test]);

  return { form, fieldArray, test, refetch };
};

export default useTestQuestionList;

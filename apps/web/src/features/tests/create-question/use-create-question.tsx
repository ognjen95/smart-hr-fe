import { useCallback } from 'react'
import { toast } from 'react-toastify'

import useToggle from '~hooks/use-toggle'

import useCreateQuestionForm from './create-question-form/use-create-question-form'
import { CreateQuestionFormModel, UseCreateQuestion, UseCreateQuestionReturn } from './types'

import { useCreateQuestionMutation } from '~graphql-api'


const useCreateQuestion: UseCreateQuestion = (): UseCreateQuestionReturn => {
  const { isOpen, open, close, toggle } = useToggle()

  const {form, fieldArray} = useCreateQuestionForm()
  const [createQuestion] = useCreateQuestionMutation()

  const onSubmit = useCallback((data: CreateQuestionFormModel) => {
    createQuestion({
      onError: ({ graphQLErrors: [{ message }] }) => {
        close()
        toast.error(message ?? "There was problem with creating question")
      },
      onCompleted: () => {
        form.reset()
        toast.success("Question successfully created")
        close()
      },
      variables: {
        createQuestionInput: {
          text: data.text,
          answers: data.answers,
          points: data.points,
          questionGroup: data.questionGroup
        }
      }
    })
  }, [close, createQuestion, form])

  const handleOpen = useCallback(async () => {
    const isValid = await form.trigger()
    if (isValid) {
      open()
    }
  }, [form, open])

  return {
    form,
    onSubmit,
    fieldArray,
    modal: {
      open: handleOpen,
      isOpen,
      close,
      toggle
    },
  }
}

export default useCreateQuestion;

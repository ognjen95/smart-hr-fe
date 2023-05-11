import { useCallback, useMemo } from 'react'
import { toast } from 'react-toastify'
import { generateId } from 'src/helpers/generateId'

import useToggle from '~hooks/use-toggle'

import useCreateQuestionForm from './create-question-form/use-create-question-form'
import { CreateQuestionFormModel, UseCreateQuestion, UseCreateQuestionReturn } from './types'

import { useCreateQuestionMutation, useFindAllQuestionGroupsQuery } from '~graphql-api'

const useCreateQuestion: UseCreateQuestion = (): UseCreateQuestionReturn => {
  const { isOpen, open, close, toggle } = useToggle()
  const { form, fieldArray } = useCreateQuestionForm()

  const [createQuestion] = useCreateQuestionMutation()

  const { data: questionGroup } = useFindAllQuestionGroupsQuery()

  const questionGroupOptions = useMemo(() => questionGroup?.findAllQuestionGroups.edges.map((edge) => ({
    label: edge.node.name,
    value: edge.node.id,
  })) ?? [], [questionGroup])

  const onSubmit = useCallback((data: CreateQuestionFormModel) => {
    const answers = data.answers.map((answer) => ({
      ...answer,
      id: generateId()
    }))

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
          answers,
          points: data.points,
          questionGroup: data.questionGroup || undefined
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
    questionGroupOptions: [{ label: 'Select question group', value: '' }, ...questionGroupOptions],
    modal: {
      open: handleOpen,
      isOpen,
      close,
      toggle
    },
  }
}

export default useCreateQuestion;

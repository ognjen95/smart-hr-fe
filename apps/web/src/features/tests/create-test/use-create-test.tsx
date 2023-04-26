import { useCallback } from 'react'
import { toast } from 'react-toastify'

import useToggle from '~hooks/use-toggle'

import useCreateTestForm from './create-test-form/use-create-test-form'
import { CreateTestModel } from './types'

import { useCreateTestMutation } from '~graphql-api'

const useCreateTest = () => {
  const { form } = useCreateTestForm()
  const [createTest] = useCreateTestMutation()
  const modal = useToggle()

  const onSubmit = useCallback(async (data: CreateTestModel) => {
    await createTest({
      onError: () => {
        toast.error('Something went wrong')
      },
      onCompleted: () => {
        toast.success('Test created successfully')
        modal.close()
        form.reset()
      },
      variables: {
        createTestInput: {
          name: data.name,
          percentageToPass: data.percentageToPass,
          timeLimit: data.timeLimit,
          questionIds: data.questionIds,
        },
      },
    })
  }, [createTest, form, modal])

  const handleOpenModal = useCallback(async () => {
    const questionIds = form.getValues('questionIds')
    const filtered = questionIds.filter((id) => id)
    if (filtered.length <= 0) {
      toast.error('You need to pick questions for test')
      return
    }

    form.setValue('questionIds', filtered);

    const isValid = await form.trigger()
    if (!isValid) return;

    modal.open()
  }, [form, modal])

  return {
    form, onSubmit, modal: {
      ...modal,
      open: handleOpenModal,
    }
  }
}

export default useCreateTest

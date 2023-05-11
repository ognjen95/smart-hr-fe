import { useCallback } from 'react'
import { toast } from 'react-toastify'

import { FindTestByIdDocument, useUpdateTestMutation } from '~graphql-api'

const useUpdateTest = () => {
  const [updateTest] = useUpdateTestMutation()

  const startTest = useCallback((testId: string) => {
    if (!testId) return

    updateTest({
      refetchQueries: [FindTestByIdDocument],
      onCompleted: () => {
        toast.success('Test started successfully')
      },
      variables: {
        updateTestInput: {
          id: testId,
          startedAt: new Date(),
          // TODO: Uncomment this when we have employeeId in the context
          // employeeId: '1'
        }
      }
    })
  }, [updateTest])

  return {
    startTest
  }
}

export default useUpdateTest
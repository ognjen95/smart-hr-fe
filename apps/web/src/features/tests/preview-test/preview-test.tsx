import React from 'react'
import { Button } from 'ui-components'

import StartTestModal from './start-test-modal'
import TestForm from './test-form/test-form'
import TestHeader from './test-header'
import useTestQuestionList from './use-question-list'
import useUpdateTest from './use-update-test'

const PreviewTestFeature = () => {
  const { form, fieldArray, test, loading, handleAnswer } = useTestQuestionList()
  const { startTest } = useUpdateTest()

  if (!test) return null

  if (!test.startedAt) return (
    <StartTestModal
      testName={test.name}
      timeLimit={test.timeLimit}
      percentageToPass={test.percentageToPass}
      onTestStart={() => {
        startTest(test.id)
      }}
    />
  )

  return (
    <div>
      <TestHeader
        {...{
          countdownTime: test.timeLimit ?? 0,
          percentageToPass: test.percentageToPass,
          testName: test.name
        }}
      />
      <TestForm
        {...{
          form,
          fieldArray,
          loading,
          handleAnswer
        }}
      />
      <div className='my-10'>
        <Button size='large' fullWidth>
          Complete Test
        </Button>
      </div>
    </div>
  )
}

export default PreviewTestFeature
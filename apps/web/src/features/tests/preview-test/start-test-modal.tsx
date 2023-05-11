import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Modal } from 'ui-components'

import useToggle from '~hooks/use-toggle'


type StartTestModalProps = {
  timeLimit?: number | null
  testName: string
  percentageToPass: number
  onTestStart: () => void
}
const StartTestModal: FC<StartTestModalProps> = ({
  timeLimit,
  testName,
  percentageToPass,
  onTestStart,
}) => {
  const { push } = useRouter()
  const { isOpen } = useToggle(true)

  return (
    <Modal
      title={testName}
      description={
        `This is a ${testName} test.
    You have ${timeLimit || 'unlimited'} minutes to complete it.
    To pass this test you need to have ${percentageToPass}% correct answers.
    When you are ready click START TEST button.
    Good luck!`
      }
      isOpen={isOpen}
      size='large'
      leftButton={{
        buttonText: 'Cancel',
        onClick: () => {
          push('/company/tests/tests-list')
        }
      }}
      rightButton={{
        buttonText: 'Start Test',
        onClick: onTestStart
      }}
    />
  )
}

export default StartTestModal
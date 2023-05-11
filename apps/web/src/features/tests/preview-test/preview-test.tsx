import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Text } from 'ui-components'

import CountDown from '~components/countdown/countdown'
import Form from '~components/form'
import TestQuestion from '~components/questions/question/question'

import { QuestionModel } from './types'
import useTestQuestionList from './use-question-list'

import { FindTestByIdDocument, useUpdateQuestionMutation } from '~graphql-api'

const PreviewTestFeature = () => {
  const { form, test, fieldArray } = useTestQuestionList()
  const [submitAnswer, { loading }] = useUpdateQuestionMutation()

  const handleSubmit = async (selectedAnswer: string, questionId: string) => {
    const answeredIds = []

    answeredIds.push(selectedAnswer)

    if (!answeredIds.length) {
      toast.error('Please select an answer')
      return;
    }

    await submitAnswer({
      variables: {
        updateQuestionInput: {
          id: questionId,
          answeredIds,
        }
      },
      awaitRefetchQueries: true,
      refetchQueries: [FindTestByIdDocument],
      onCompleted: () => {
        toast.success('Answer submitted')
      },
    })
  }

  const [stopAnimation, setStopAnimation] = useState(false)

  useEffect(() => {
    const initialAnimation = () => {
      setStopAnimation(true)
    }

    setTimeout(initialAnimation, 1000)

    return () => {
      // clearTimeout(initialAnimation)
    }
  }, [submitAnswer])

  if (!test) return null


  return (
    <div>
      <motion.div
        {...(!stopAnimation && {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5 }
        })}
        initial={!stopAnimation && { opacity: 0 }}
        animate={!stopAnimation && { opacity: 1 }}
        transition={!stopAnimation ? { duration: 0.5 } : undefined}
        className="daisy-stats w-full flex items-center">
        <div className="daisy-stat text-center">
          <Text variant='heading1'>{test.name}</Text>
        </div>
        <div className="daisy-stat w-full text-center">
          <div className="daisy-stat-value text-primary text-6xl">{test.percentageToPass}%</div>
          <div className="daisy-stat-desc text-secondary">Required score to pass a test</div>
        </div>
        <div className="daisy-stat flex justify-center flex-col items-center w-full">
          <CountDown milliseconds={100000000} />
          <div className="daisy-stat-desc text-secondary mt-2">Test will end when time expires</div>
        </div>
      </motion.div>
      <Form<QuestionModel> form={form}>
        {({ control }) => (
          <div className='mt-5'>
            {fieldArray.fields.map((question, index) => {
              const { id, text, answerType, questionId } = question
              return (
                <motion.div
                  {...(!stopAnimation && {
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: index * 0.2 },
                  })}
                  key={id}>
                  <TestQuestion
                    isLoading={loading}
                    fieldName={`questions.${index}`}
                    answerType={answerType as string}
                    text={`${index + 1}. ${text}`}
                    control={control}
                    index={index}
                    onSubmit={(answerId: string) => {
                      handleSubmit(answerId, questionId)
                    }}
                  />
                </motion.div>
              )
            })}
            <div className='my-10'>
              <Button size='large' fullWidth>
                Complete Test
              </Button>
            </div>
          </div>
        )}
      </Form>
    </div >
  )
}

export default PreviewTestFeature
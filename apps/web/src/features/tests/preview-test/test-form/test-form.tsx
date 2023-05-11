import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form'

import Form from '~components/form'
import TestQuestion from '~components/questions/question/question'
import useInitialAnimation from '~hooks/use-initial-animation'

import { QuestionModel } from '../types'

type TestFormProps = {
  form: UseFormReturn<QuestionModel>;
  fieldArray: UseFieldArrayReturn<QuestionModel, "questions">;
  loading: boolean
  handleAnswer: (answerId: string, questionId: string) => void
}

const TestForm: FC<TestFormProps> = ({
  form,
  fieldArray,
  loading,
  handleAnswer,
}) => {
  const stopAnimation = useInitialAnimation()

  return (
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
                  text={`${index + 1}. ${text} `}
                  control={control}
                  index={index}
                  onSubmit={(answerId: string) => {
                    handleAnswer(answerId, questionId)
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      )}
    </Form>
  )
}

export default TestForm
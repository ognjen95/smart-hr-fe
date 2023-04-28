import { FC, ReactNode, useCallback, useMemo } from 'react'
import { CheckboxCard, Input, Paper, RadioButtonCard } from 'ui-components'


import { AnswerEntity } from '~graphql-api'


export type QuestionProps = {
  question: string
  answers: AnswerEntity[]
  buttons?: ReactNode[]
  answerType?: 'text' | 'multiple' | 'single' | null | string
}

const Question: FC<QuestionProps> = ({ question, answers, buttons, answerType = 'single' }) => {
  const answersFactory = useMemo(() => (
    answers.map((answer) => {
      if (answerType === 'text') {
        return (
          <Input
            key={answer.id}
          />
        )
      }
      if (answerType === 'multiple') {
        return (
          <CheckboxCard
            key={answer.id}
            name={answer.id}
            text={answer.text} />
        )
      }
      return <RadioButtonCard key={answer.id} text={answer.text} />
    })
  ), [answerType, answers])

  return (
    <Paper>
      <div className="p-5">
        <div className="mb-7">
          <h1 className="text-4xl">{question}</h1>
          {/* {isMultipleAnswers && <p>( Multiple correct answers )</p>} */}
        </div>
        {answersFactory}
        {buttons && (
          <div className="mt-5 flex justify-end gap-4">
            {buttons}
          </div>
        )}
      </div>
    </Paper>
  )
}

export default Question
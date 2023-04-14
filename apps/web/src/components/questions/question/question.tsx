import { FC, ReactNode, useCallback } from 'react'
import { CheckboxCard, Input, Paper, RadioButtonCard } from 'ui-components'

import { AnswerTypeEnum } from '~common/enums/tests'


export type QuestionProps = {
  question: string
  answers: {
    text: string
    answered: boolean
  }[]
  answerType?: AnswerTypeEnum
  buttons?: ReactNode[]
}

const Question: FC<QuestionProps> = ({ question, answers, answerType = 'radio', buttons }) => {
  const answersFactory = useCallback(() => {
    switch (answerType) {
      case AnswerTypeEnum.RADIO:
        return answers.map(({ text }) => (
          <RadioButtonCard key={text} text={text} />
        ))
      case AnswerTypeEnum.CHECKBOX:
        return answers.map(({ text }) => (
          <CheckboxCard key={text} text={text} />
        ))
      case AnswerTypeEnum.TEXT:
        return <Input textArea placeholder='Please type your answer ... ' />
      default:
        return null
    }
  }, [answers, answerType])

  const isMultipleAnswers = answerType === AnswerTypeEnum.CHECKBOX;

  return (
    <Paper>
      <div className="p-5">
        <div className="mb-7">
          <h1 className="text-4xl">{question}</h1>
          {isMultipleAnswers && <p>( Multiple correct answers )</p>}
        </div>
        {answersFactory()}
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
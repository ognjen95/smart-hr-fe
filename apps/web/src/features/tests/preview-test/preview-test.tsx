import { useRouter } from 'next/router'
import React from 'react'
import { Button, Text } from 'ui-components'

import { AnswerTypeEnum } from '~common/enums/tests'
import CountDown from '~components/countdown/countdown'
import Question from '~components/questions/question/question'

import { useFindTestByIdQuery } from '~graphql-api'

const PreviewTestFeature = () => {
  const { query } = useRouter()
  const { data } = useFindTestByIdQuery({
    variables: {
      findTestByIdId: query.testId as string
    }
  })

  const test = data?.findTestById
  if (!test) return null

  return (
    <div>
      <div className="daisy-stats w-full flex items-center">
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
      </div>

      <div className='mt-5'>
        {test.questions.map((question, index) => (
          <Question key={question.id}
            answers={question.answers ?? []}
            answerType={question.answerType}
            question={`${index + 1}. ${question.text}`}
          />
        ))}
        <div className='my-10'>
          <Button size='large' fullWidth>
            Complete {test.name}Test
          </Button>
        </div>
      </div>
    </ div>
  )
}

export default PreviewTestFeature
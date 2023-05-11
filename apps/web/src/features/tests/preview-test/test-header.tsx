import React, { FC } from 'react'
import { Text } from 'ui-components'

import CountDown from '~components/countdown/countdown'

type TestHeaderProps = {
  countdownTime: number
  percentageToPass: number
  testName: string
}

const TestHeader: FC<TestHeaderProps> = ({
  countdownTime,
  percentageToPass,
  testName
}) => (
  <div className="daisy-stats w-full flex items-center">
    <div className="daisy-stat text-center">
      <Text variant='heading1'>{testName}</Text>
    </div>
    <div className="daisy-stat w-full text-center">
      <div className="daisy-stat-value text-primary text-6xl">{percentageToPass}%</div>
      <div className="daisy-stat-desc text-secondary">Required score to pass a test</div>
    </div>
    <div className="daisy-stat flex justify-center flex-col items-center w-full">
      <CountDown milliseconds={countdownTime} />
      <div className="daisy-stat-desc text-secondary mt-2">Test will end when time expires</div>
    </div>
  </div>
)

export default TestHeader
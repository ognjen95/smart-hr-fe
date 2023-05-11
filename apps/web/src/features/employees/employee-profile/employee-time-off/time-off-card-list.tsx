import React, { FC } from 'react'
import { Paper, Text } from "ui-components"
import Button from 'ui-components/src/button/button'

import Modal from '~components/modal'
import useToggle from '~hooks/use-toggle'

import { TimeOff } from './types'

export type TimeOffCardListProps = {
  timeOffs: TimeOff[]
}

const TimeOffCardList: FC<TimeOffCardListProps> = ({ timeOffs }) => {
  const { toggle, isOpen } = useToggle()
  return (
    <div className="flex items-start justify-between gap-4 mt-5 flex-wrap xl:flex-nowrap">
      {
        timeOffs.map((timeOff, index) => (
          <Paper key={timeOff.id} index={index} fullWidth>
            <div className="flex items-start justify-between flex-col gap-5">
              <Text variant="regularBodyLightBolded">{timeOff.type}</Text>
              <div className="flex items-center gap-2">
                <Text>Available days</Text>
                <Text variant="regularBodyLightBolded" color="primary">{timeOff.available}</Text>
              </div>
              <div className="flex items-center gap-2">
                <Text>Used days</Text>
                <Text variant="regularBodyLightBolded" color="primary">{timeOff.used}</Text>
              </div>
              <div className="flex items-center gap-2">
                <Text>Pending days</Text>
                <Text variant="regularBodyLightBolded" color="primary">{timeOff.pending}</Text>
              </div>
              <div className="flex items-center gap-2">
                <Text>Remaining days</Text>
                <Text variant="regularBodyLightBolded" color="primary">{timeOff.remaining}</Text>
              </div>
            </div>
            <div className='mt-5'>
              <Button onClick={toggle} fullWidth size='small'>Send Request</Button>
            </div>
          </Paper>
        ))
      }

      <Modal
        title="Time Off Request Confirmation"
        description='Are you sure you want to request time off? Please double check dates and type of time off.'
        isOpen={isOpen}
        leftButton={{
          buttonText: 'Close',
          onClick: () => { toggle() },
        }}
        rightButton={{
          buttonText: 'Confirm',
          onClick: () => { toggle() },
        }}
      />
    </div>
  )
}

export default TimeOffCardList
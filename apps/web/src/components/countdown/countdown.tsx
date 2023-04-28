import React, { FC } from 'react'

type CountDownProps = {
  milliseconds: number
}

const CountDown: FC<CountDownProps> = ({
  milliseconds
}) => {
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24))
  const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000)

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max items-center justify-center ">
      <div className="flex flex-col p-3 bg-base-300 rounded-box text-neutral-content">
        <span className="daisy-countdown font-mono text-5xl">
          <span style={{ "--value": days }} />
        </span>
        days
      </div>
      <div className="flex flex-col p-3 bg-base-300 rounded-box text-neutral-content">
        <span className="daisy-countdown font-mono text-5xl">
          <span style={{ "--value": hours }} />
        </span>
        hours
      </div>
      <div className="flex flex-col p-3 bg-base-300 rounded-box text-neutral-content">
        <span className="daisy-countdown font-mono text-5xl">
          <span style={{ "--value": minutes }} />
        </span>
        min
      </div>
      <div className="flex flex-col p-3 bg-base-300 rounded-box text-neutral-content">
        <span className="daisy-countdown font-mono text-5xl">
          <span style={{ "--value": seconds }} />
        </span>
        sec
      </div>
    </div>
  )
}
export default CountDown
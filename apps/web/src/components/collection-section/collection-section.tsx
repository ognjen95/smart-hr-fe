import { useRouter } from 'next/router'
import React, { FC, ReactNode, memo, useMemo } from 'react'
import { Paper } from 'ui-components'

import { CardColors } from '~common/types/types'
import GlassCard, { GLassCardProps } from '~components/cards/glass-card/glass-card'

type CollectionSectionProps = {
  title: string
  data: GLassCardProps[] | []
  buttons: ReactNode[]
  onCreate: () => void
}

const CollectionSection: FC<CollectionSectionProps> = ({
  title,
  data = [],
  buttons,
  onCreate,
}) => {
  const { push } = useRouter()

  const cards = useMemo(() => (
    data?.map(({ button, title: cardTitle, description, color }) => (
      <GlassCard
        key={cardTitle}
        title={cardTitle}
        description={description}
        color={color as CardColors}
        button={button && {
          text: button?.text,
          onClick: () => { if (button.url) push(button.url) }
        }} />
    ))
  ), [data, push])

  return (
    <Paper>
      <div className='flex justify-between items-center'>
        <h1 className='mb-4 font-bold text-xl'>{title}</h1>
        <div className='mb-2 flex items-center'>
          {buttons}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {cards}
        <div onClick={() => onCreate()} className='h-80 bg-base-200 p-5 glass rounded-xl  border-2 border-base-content flex flex-col justify-center items-center cursor-pointer hover:text-accent-content ease-in-out duration-100'>
          <p className='font-bold text-6xl'>+</p>
          <p className='font-bold text-2xl text-center'>New {title.slice(0, -1)}</p>
        </div>
      </div>
    </Paper>
  )
}

export default memo(CollectionSection)
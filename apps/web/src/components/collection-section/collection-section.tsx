import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'
import { Button, Paper } from 'ui-components'

import { CardColors } from '~common/types/types'
import GlassCard, { GLassCardProps } from '~components/cards/glass-card/glass-card'

type CollectionSectionProps = {
  title: string
  data: GLassCardProps[] | []
  buttons: ReactNode[]
}

const CollectionSection: FC<CollectionSectionProps> = ({
  title,
  data = [],
  buttons,
}) => {
  const { push } = useRouter()

  return (
    <Paper>
      <div className='flex justify-between items-center'>
        <h1 className='mb-4 font-bold text-xl'>{title}</h1>
        <div className='mb-2'>
          {buttons}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data?.map(({ button, title: cardTitle, description, color }) => (
          <GlassCard
            key={cardTitle}
            title={cardTitle}
            description={description}
            color={color as CardColors}
            button={button && {
              text: button?.text,
              onClick: () => { if (button.url) push(button.url) }
            }} />
        ))}
        <div className='h-80 bg-base-200 p-5 glass rounded-xl  border-2 border-base-content flex flex-col justify-center items-center cursor-pointer hover:text-secondary ease-in-out duration-300'>
          <p className='font-bold text-6xl'>+</p>
          <p className='font-bold text-2xl text-center'>New {title.slice(0, -1)}</p>
        </div>
      </div>
    </Paper>
  )
}

export default CollectionSection
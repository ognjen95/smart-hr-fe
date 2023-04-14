import { FC } from 'react'

import { CARD_COLOR_MAPPER } from '~common/constants/colors'
import { CardColors } from '~common/types/types'


export type GLassCardProps = {
  title: string
  description: string
  height?: string
  width?: string
  color?: CardColors
  button?: {
    text: string
    onClick?: () => void
    url?: string
  }
}

const GlassCard: FC<GLassCardProps> = ({
  button, color = 'primary', height = 'h-auto', width = 'w-full', title, description
}) => (
  <div className={`daisy-card glass ${CARD_COLOR_MAPPER[color]} ${height} ${width} rounded-xl ease-in-out duration-200`}>
    <div className="daisy-card-body">
      <h2 className="daisy-card-title text-accent-content font-bold">{title}</h2>
      <p className='text-accent-content mt-4 text-lg'>{description}</p>
      <div className="daisy-card-actions justify-end">
        {button && (
          <button type="button" onClick={() => { if (button?.onClick) button.onClick() }} className="daisy-btn daisy-btn-accent-content daisy-btn-outline border-accent-content text-accent-content">
            {button.text}
          </button>
        )}
      </div>
    </div>
  </div>
)

export default GlassCard
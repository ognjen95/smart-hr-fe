import React, { FC, memo } from 'react'

import { CARD_COLOR_MAPPER } from '~common/constants/colors'

type EmployeeTypeCardProps = {
    title: string,
    description?: string,
    color?: 'success' | 'warning' | 'error' | 'info' | 'primary'
    onClick?: () => void
}

const EmployeeTypeCard: FC<EmployeeTypeCardProps> = ({ title, description, color = 'primary', onClick }) => (
        <div className={`
        daisy-card 
        glass
        text-primary-content
        cursor-pointer
        hover:scale-x-95 
        ease-in-out 
        duration-300
        shadow-lg
        shadow-neutral-focus
        ${CARD_COLOR_MAPPER[color]} 
        `}
            onClick={() => { if (onClick) onClick() }}
        >
            <div className="daisy-card-body">
                <h2 className="daisy-card-title text-2xl">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
export default memo(EmployeeTypeCard)
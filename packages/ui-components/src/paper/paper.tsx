// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion'

import { FCWithChildren } from '../common/types'

type PaperProps = {
    noPadding?: boolean
    transparent?: boolean,
    offsetY?: number
    index?: number
    fullWidth?: boolean
}

const Paper: FCWithChildren<PaperProps> = ({ noPadding, children, transparent, offsetY = 30, index = 1, fullWidth = false }) => (
    <motion.div {... {
        initial: { opacity: 0, y: offsetY },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
    }}
        className={`${transparent ? "transparent" : 'bg-base-100'} ${noPadding ? '' : 'p-5'} ${fullWidth ? 'w-full' : ''} rounded-[25px] mb-5 shadow shadow-neutral-focus`}>
        {children}
    </motion.div >
)

export default Paper
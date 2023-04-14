import { FCWithChildren } from '../common/types'

type PaperProps = {
    noPadding?: boolean
}

const Paper: FCWithChildren<PaperProps> = ({ noPadding, children }) => (
    <div className={`bg-base-200 ${noPadding ? '' : 'p-5'} rounded-xl mb-5 shadow-sm shadow-neutral-focus`}>
        {children}
    </div>
)

export default Paper
import { FCWithChildren } from '../common/types'

type PaperProps = {
    noPadding?: boolean
}

const Paper: FCWithChildren<PaperProps> = ({ noPadding, children }) => (
    <div className={`bg-base-100 ${noPadding ? '' : 'p-5'} rounded-xl mb-5 shadow shadow-neutral-focus`}>
        {children}
    </div>
)

export default Paper
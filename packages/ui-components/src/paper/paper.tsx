import { FCWithChildren } from '../common/types'

type PaperProps = {
    noPadding?: boolean
    transparent?: boolean,
}

const Paper: FCWithChildren<PaperProps> = ({ noPadding, children, transparent }) => (
    <div className={`${transparent ? "transparent" : 'bg-base-100'} ${noPadding ? '' : 'p-5'} rounded-xl mb-5 shadow shadow-neutral-focus`}>
        {children}
    </div>
)

export default Paper
import { FC, InputHTMLAttributes } from 'react'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    color?: string
    label?: string
    errorMessage?: string
}

const Checkbox: FC<CheckboxProps> = ({ label, color, ...props}) => (
    <div className="daisy-form-control">
        <label className="daisy-label cursor-pointer flex flex-col-reverse">
            <span className="daisy-label-text">{label}</span>
            <input type="checkbox" {...props} className="daisy-checkbox daisy-checkbox-success border-2 border-accent-content" />
        </label>
    </div>
)

export default Checkbox
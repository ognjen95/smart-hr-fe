import React, { FC } from 'react'

export type SelectProps = {
  options?: {
    value: string
    label: string
  }[]
  label?: string
}

const Select: FC<SelectProps> = ({ options, label, ...props }) => (
  <div className="form-control w-full max-w-xs flex flex-col" >
    {label && <label className="daisy-label">
      <span className="daisy-label-text">{label}</span>
    </label>}
    <select className="daisy-select daisy-select-primary" {...props}>
      {options?.map((option, index) => (
        <option key={index}>{option.label}</option>
      ))}
    </select>
  </div >
)

export default Select

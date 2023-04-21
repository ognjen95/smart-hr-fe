import React, { FC } from 'react'

export type SelectProps = {
  options?: {
    value: string
    label: string
  }[]
  label?: string
  errorMessage?: string
}

const Select: FC<SelectProps> = ({ options, label, errorMessage, ...props }) => (
  <div className="form-control w-full max-w-xs flex flex-col" >
    {label && <label className="daisy-label">
      <span className="daisy-label-text">{label}</span>
    </label>}
    <select className="daisy-select daisy-select-primary" {...props}>
      {options?.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
    <p className="text-error text-sm pl-1 h-3">{errorMessage}</p>
  </div >
)

export default Select

import { useRef } from 'react'
import { FieldValues } from 'react-hook-form';

import CheckboxField, { CheckboxFieldProps } from './checkbox-field'

const CheckboxCard = <TFormValues extends FieldValues = FieldValues>({
  text,
  fieldName,
  control,
  customValue,
  onClick,
  ...fieldProps
}: CheckboxFieldProps<TFormValues> & { text: string }) => {
  const ref = useRef<HTMLInputElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (onClick) onClick(event)
    ref.current?.click()
  }

  return (
    <div
      onClick={handleClick}
      className={`${fieldProps.checked ? 'bg-primary' : 'bg-slate-700'} hover:bg-primary-focus p-1 px-5 rounded-full mb-4 shadow-md shadow-neutral hover:opacity-90 active:scale-x-90 ease-in-out duration-200 cursor-pointer`}>
      <div className='flex justify-between items-center p-4'>
        <p className='text-xl text-secondary-content'>
          {text}
        </p>
        <div>
          <CheckboxField
            {...{
              fieldName,
              control,
              ...fieldProps,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CheckboxCard
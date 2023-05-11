import { useRef } from 'react'
import { FieldValues } from 'react-hook-form'

import RadioField, { RadioFieldProps } from './radio-field'

const RadioButtonCard = <TFormValues extends FieldValues = FieldValues>({
  text, fieldName, defaultValue, customValue, control
}: RadioFieldProps<TFormValues> & { text: string, customValue?: string }
) => {
  const ref = useRef<HTMLInputElement>(null)
  const handleClick = () => { ref.current?.click() }

  return (
    <div
      onClick={handleClick}
      className="hover:bg-primary bg-slate-700 p-1 px-5 rounded-full mb-4 shadow-md shadow-neutral hover:opacity-90 active:scale-x-90 ease-in-out duration-200 cursor-pointer">
      <div className='flex justify-between items-center p-4'>
        <p className='text-xl text-secondary-content'>
          {text}
        </p>
        <RadioField
          name=''
          options={[]}
          {...{
            fieldName,
            control,
            defaultValue,
            customValue
          }}
        />
      </div>
    </div>
  )
}

export default RadioButtonCard
import { FC, useRef } from 'react'

export type RadioButtonCardProps = {
  text: string
  name?: string
}

const RadioButtonCard: FC<RadioButtonCardProps> = ({ text, name }) => {
  const ref = useRef<HTMLInputElement>(null)
  const handleClick = () => { ref.current?.click() }

  return (
    <div
      onClick={handleClick}
      className="bg-primary-focus p-1 rounded-xl mb-4 shadow-md shadow-neutral hover:opacity-90 active:scale-x-90 ease-in-out duration-200 cursor-pointer">
      <div className='flex justify-between items-center p-4'>
        <p className='text-xl text-secondary-content'>
          {text}
        </p>
        <input ref={ref} type="radio" name={name} className="daisy-radio checked:bg-secondary-content border-2 border-secondary-content daisy-radio-lg" />
      </div>
    </div>
  )
}

export default RadioButtonCard
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { FC, ReactNode } from "react"

export type Items = {
  title?: string
  component?: ReactNode
  onClick?: () => void
  selected?: boolean
}

export type DropdownProps = {
  label: string
  items: Items[]
}

const Dropdown: FC<DropdownProps> = ({ label, items }) => (
  <div className="daisy-dropdown">
    <label tabIndex={0} className="daisy-btn daisy-btn-ghost m-1 cursor-pointer">
      {label.toUpperCase()}
    </label>
    <ul tabIndex={0} className="daisy-dropdown-content daisy-menu shadow bg-primary rounded-box w-auto">
      {items.map((item, index) => (
        <li key={index} className={`menu-title text-accent-content py-2 px-4 ${item.selected ? 'bg-primary-focus' : ''}`}>
          {item?.component || <a onClick={item.onClick}>{item.title}</a>}
        </li>
      ))}
    </ul>
  </div >
)

export default Dropdown
import { FC, ReactNode } from 'react'

export type Item ={
  icon: ReactNode,
  name: string,
  onClick: () => void,
  isActive?: boolean
}
export type SideMenuProps = {
  items: Array<Item>,
}

const SideMenu: FC<SideMenuProps> = ({ items }) => (
  <div className="daisy-drawer-side">
    <label htmlFor="my-drawer-2" className="daisy-drawer-overlay" />
    <ul className="daisy-menu p-4 bg-base-200 text-base-content">
      <li className='mb-2'>
        <a className='flex align-items justify-start rounded-lg'>
          <div className='text-2xl text-base-content font-bold'>
            Smart HR System
          </div>
        </a>
      </li>
      {items.map(({ name, onClick, icon, isActive }) => (
        <li key={name} className='my-1'>
          <a className={`p-[.5rem] my-1 flex align-items justify-start rounded-full active:scale-90 ease-in-out duration-200 ${isActive ? 'bg-gradient-to-r from-primary-focus to-primary text-white border-primary' : ''}`} onClick={onClick}>
            <div className="p-1 rounded-full shadow shadow-primary-focus bg-primary box-border">
              {icon}
            </div>
            <div>
              <p className='text-lg'>
                {name}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div >
)

export default SideMenu
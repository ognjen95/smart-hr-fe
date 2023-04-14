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
  <div className="daisy-drawer-side shadow-lg shadow-neutral">
    <label htmlFor="my-drawer-2" className="daisy-drawer-overlay" />
    <ul className="daisy-menu p-4 bg-base-100 text-base-content">
      <li className='mb-2'>
        <a className='flex align-items justify-start rounded-lg'>
          <div className='text-2xl text-base-content font-bold'>
            Smart HR System
          </div>
        </a>
      </li>
      {items.map(({ name, onClick, icon, isActive }) => (
        <li key={name} className='my-1'>
          <a className={`p-3 flex align-items justify-start rounded-xl active:scale-90 ease-in-out duration-200 ${isActive ? 'bg-primary' : ''}`} onClick={onClick}>
            <div className={`p-1 rounded-lg shadow-md shadow-primary-focus bg-primary box-border ${isActive ? 'shadow-neutral shadow-xxl' : ''}`}>
              {icon}
            </div>
            <div>
              <p className='text-md'>
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
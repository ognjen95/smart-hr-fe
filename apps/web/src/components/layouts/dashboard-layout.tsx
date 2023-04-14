import { useRouter } from 'next/router'
import { FC, ReactNode, useState } from 'react'
import { DrawerRight, Navbar, SideMenu } from 'ui-components'

import { Icon } from '../../../dummy-data/data'

type DashboardLayoutProps = {
  children: ReactNode,
  showRightDrawer?: boolean
  rightDrawerComponent?: ReactNode
  toggleRightDrawer: () => void
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, showRightDrawer = false, rightDrawerComponent, toggleRightDrawer }) => {
  const { push, asPath } = useRouter()

  const SIDE_MENU_DATA = [
    {
      name: 'Dashboard',
      icon: <Icon />,
      onClick: () => { push('/company/dashboard') },
      isActive: asPath.includes('/company/dashboard')
    },
    {
      name: 'Employees',
      icon: <Icon />,
      onClick: () => { push('/company/employees') },
      isActive: asPath.includes('/company/employees')
    },
    {
      name: 'Tests',
      icon: <Icon />,
      onClick: () => { push('/company/tests') },
      isActive: asPath === '/company/tests'
    },
    {
      name: 'Documents',
      icon: <Icon />,
      onClick: () => { },
    },
    {
      name: 'Stats',
      icon: <Icon />,
      onClick: () => { },
    },
  ];

  const [isOpen, setIsOpen] = useState(true);

  return (
    <DrawerRight isOpen={showRightDrawer} component={rightDrawerComponent}>
      <div className="daisy-drawer daisy-drawer-mobile">
        <input id="my-drawer-2" type="checkbox" checked={isOpen} className="daisy-drawer-toggle" />
        <div className="daisy-drawer-content flex flex-col rounded-lg px-5">
          <div className='my-2'>
            <Navbar navItems={[]} logo={undefined} />
          </div>
          {children}
        </div>
        <SideMenu items={SIDE_MENU_DATA} />
      </div>
    </DrawerRight>
  )
}

export default DashboardLayout
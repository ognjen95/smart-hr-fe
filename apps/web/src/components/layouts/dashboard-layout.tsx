import { useRouter } from 'next/router'
import { ReactNode, memo, useMemo } from 'react'
import { Navbar, SideMenu } from 'ui-components'
import { FCWithChildren } from 'ui-components/src/common/types'

import { Icon } from '../../../dummy-data/data'

export type BreadCrumb = {
  name: string,
  push: () => void,
}

type DashboardLayoutProps = {
  children: ReactNode,
  pageName: string,
  breadCrumb?: BreadCrumb
}

const DashboardLayout: FCWithChildren<DashboardLayoutProps> = ({ children, pageName, breadCrumb }) => {
  const { push, asPath } = useRouter()

  const SIDE_MENU_DATA = useMemo(() => [
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
      isActive: asPath.includes('/company/tests')
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
  ], [asPath, push])

  return (
    <div className="daisy-drawer daisy-drawer-mobile">
      <input id="my-drawer-2" type="checkbox" checked onChange={() => { }} className="daisy-drawer-toggle" />
      <div className="daisy-drawer-content flex flex-col rounded-lg px-5">
        <div className='my-2'>
          <Navbar breadCrumb={breadCrumb} navItems={[]} logo={undefined} pageName={pageName} />
        </div>
        {children}
      </div>
      <SideMenu items={SIDE_MENU_DATA} />
    </div>
  )
}

export default memo(DashboardLayout)
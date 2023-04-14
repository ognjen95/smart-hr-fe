import { ReactNode } from "react"

import { FCWithChildren } from "../common/types"

export type DrawerRightProps = {
  title?: string
  isOpen: boolean
  component?: ReactNode
}

const DrawerRight: FCWithChildren<DrawerRightProps> = ({
  isOpen = true,
  component,
  children,
}) => (
  <div className="daisy-drawer daisy-drawer-end">
    <input id="my-drawer-4" type="checkbox" checked={isOpen} className="daisy-drawer-toggle" />
    <div className="daisy-drawer-content">
      {children}
    </div>
    <div className="daisy-drawer-side min-w-1/3">
      <label htmlFor="my-drawer-4" className="daisy-drawer-overlay" />
      <div className="daisy-menu w-1/3 rounded-l-2xl overflow-hidden bg-primary-focus">
        {component}
      </div>
    </div>
  </div>
)

export default DrawerRight

type DrawerContentProps = {
  title: string
  actionButtons?: ReactNode[]
}

export const DrawerContent: FCWithChildren<DrawerContentProps> = ({ title, actionButtons, children }) => (
  <div className="flex flex-col overflow-y-auto">
    <div className="flex justify-start absolute top-0 right-0 left-0 p-4 border-primary bg-primary-focus border-b-2 gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
    <div className="p-4 mb-20 mt-16">
    {children}
    </div>
    <div className="flex justify-end absolute bottom-0 right-0 left-0 p-4 border-primary bg-primary-focus border-t-2 gap-4 z-50">
      {actionButtons}
    </div>
  </div>
)

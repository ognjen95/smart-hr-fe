import { ReactNode, memo, useEffect, useState } from "react"
import { Portal } from "react-portal"

import { FCWithChildren } from "../common/types"

export type DrawerRightProps = {
  title?: string
  isOpen: boolean
  component?: ReactNode
  actionButtons?: ReactNode[]
}

const DrawerRight: FCWithChildren<DrawerRightProps> = ({
  isOpen = false,
  children,
  title,
  actionButtons
}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const body = document.querySelector('body')
    setRef(body)

    return () => {
      setRef(null)
    }
  }, [])

  return (
    <div>
      {isOpen && ref ? (
        <Portal node={ref} >
          <div className="daisy-drawer daisy-drawer-end absolute right-0 top-0 left-0 bottom-0">
            <input id="my-drawer-4" type="checkbox" onChange={() => { }} checked={isOpen} className="daisy-drawer-toggle" />
            <div className="daisy-drawer-side min-w-1/3 absolute right-0 top-0 left-0 bottom-0">
              <label htmlFor="my-drawer-4" className="daisy-drawer-overlay" />
              <div className="daisy-menu w-1/3 rounded-l-2xl overflow-hidden bg-primary-focus">
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
              </div>
            </div>
          </div>
        </Portal >
      ) : null}
    </div >
  )
}

export default memo(DrawerRight)
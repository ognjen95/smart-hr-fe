import { useRouter } from 'next/router'
import React from 'react'

import DashboardLayout from '~components/layouts/dashboard-layout'
import PreviewTestFeature from '~features/tests/preview-test/preview-test'

const TestPage = () => {
  const { push } = useRouter()
  return (
    <DashboardLayout pageName='Test Preview' breadCrumb={{
      name: 'Tests List',
      push: () => push('/company/tests/tests-list')
    }}>
      <PreviewTestFeature />
    </DashboardLayout>
  )
}

export default TestPage
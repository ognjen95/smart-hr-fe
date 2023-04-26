import { useRouter } from 'next/router';
import React from 'react'

import DashboardLayout from '~components/layouts/dashboard-layout'
import TestsListFeature from '~features/tests/tests-list/tests-list-feature'

const TestsList = () => {
  const { push } = useRouter();

  return (
    <DashboardLayout pageName='Tests List' breadCrumb={{
      name: 'Tests',
      push: () => push('/company/tests')
    }}>
      <TestsListFeature />
    </DashboardLayout>
  )
}

export default TestsList
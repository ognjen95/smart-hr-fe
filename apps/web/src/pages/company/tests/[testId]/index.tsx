import React from 'react'

import DashboardLayout from '~components/layouts/dashboard-layout'
import PreviewTestFeature from '~features/tests/preview-test/preview-test'

const TestPage = () => (
  <DashboardLayout pageName='Test Preview'>
    <PreviewTestFeature />
  </DashboardLayout>
)

export default TestPage
import { useRouter } from 'next/router';
import React from 'react'

import DashboardLayout from '~components/layouts/dashboard-layout'
import QuestionsListFeature from '~features/tests/questions-list/questions-list-feature';

const QuestionsPage = () => {
  const { push } = useRouter()
  return (
    <DashboardLayout pageName='Questions List' breadCrumb={{
      name: 'Tests',
      push: () => push('/company/tests')
    }}>
      <QuestionsListFeature />
    </DashboardLayout>
  )
}

export default QuestionsPage
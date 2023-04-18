import React from 'react'

import DashboardLayout from '~components/layouts/dashboard-layout'
import QuestionsListFeature from '~features/tests/questions-list/questions-list-feature';

const QuestionsPage = () => (
  <DashboardLayout toggleRightDrawer={() => { }} >
    <QuestionsListFeature />
  </DashboardLayout>
)

export default QuestionsPage
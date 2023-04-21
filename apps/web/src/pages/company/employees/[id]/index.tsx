import { NextPage } from 'next'

import EmployeeProfileFeature from '~features/employees/employe-profile/employee-profile-feature'

import DashboardLayout from '../../../../components/layouts/dashboard-layout'

const EmployeeProfilePage: NextPage = () => (
  <DashboardLayout pageName='Employee Profile'>
    <EmployeeProfileFeature />
  </DashboardLayout>
)

export default EmployeeProfilePage
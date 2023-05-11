import { NextPage } from 'next'

import DashboardLayout from '~components/layouts/dashboard-layout'
import EmployeeProfileFeature from '~features/employees/employee-profile/employee-profile-tabs/employee-profile-feature'


const EmployeeProfilePage: NextPage = () => (
  <DashboardLayout pageName='Employee Profile'>
    <EmployeeProfileFeature />
  </DashboardLayout>
)

export default EmployeeProfilePage
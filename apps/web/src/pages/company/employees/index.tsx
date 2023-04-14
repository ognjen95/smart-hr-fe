import { NextPage } from 'next';
import { useState } from 'react';

import DashboardLayout from '~components/layouts/dashboard-layout';
import CreateEmployeeFeature from '~features/employees/create-employee/create-employee-feature';
import EmployeesListFeature from '~features/employees/employees-list/employees-list-feature';


const EmployeesPage: NextPage = () => {
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false)
  const toggleRightDrawer = () => setIsRightDrawerOpen((prev) => !prev)

  return (
    <DashboardLayout
      showRightDrawer={isRightDrawerOpen}
      toggleRightDrawer={toggleRightDrawer}
      rightDrawerComponent={
        <CreateEmployeeFeature toggleRightDrawer={toggleRightDrawer} />
      }
    >
      <EmployeesListFeature toggleRightDrawer={toggleRightDrawer} />
    </DashboardLayout>
  )
}

export default EmployeesPage;

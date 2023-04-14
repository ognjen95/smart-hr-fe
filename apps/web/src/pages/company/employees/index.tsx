import { NextPage } from 'next';

import DashboardLayout from '~components/layouts/dashboard-layout';
import CreateEmployeeFeature from '~features/employees/create-employee/create-employee-feature';
import EmployeesListFeature from '~features/employees/employees-list/employees-list-feature';
import useToggle from '~hooks/use-toggle';


const EmployeesPage: NextPage = () => {
  const { isOpen, toggle} = useToggle()

  return (
    <DashboardLayout
      showRightDrawer={isOpen}
      toggleRightDrawer={toggle}
      rightDrawerComponent={<CreateEmployeeFeature toggleRightDrawer={toggle} />}
    >
      <EmployeesListFeature toggleRightDrawer={toggle} />
    </DashboardLayout>
  )
}

export default EmployeesPage;

import { Tabs } from 'ui-components'

import ProfileHeader from '~features/employees/employee-profile/employee-profile-tabs/profile-header'

import useProfileTabs from './use-profile-tabs'


const EmployeeProfileFeature = () => {
  const { tabs, employee } = useProfileTabs()

  return (
    <div>
      <ProfileHeader employee={employee} />
      <div className='mt-[-20px]'>
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}
export default EmployeeProfileFeature
import { useRouter } from 'next/router';
import React from 'react'
import { Tab, Text } from 'ui-components';

import ProfileInfoSectionFeature from '~features/employees/employee-profile/employee-basic-info/profile-info-section';

import ProjectsFeature from '../employee-projects/projects';
import SalaryFeature from '../employee-salary/salary';
import TeamsFeature from '../employee-teams/teams';
import EmployeeTimeOffFeature from '../employee-time-off/employee-time-off';

import { User, useFindUserByIdQuery } from '~graphql-api';

type UseProfileTabsReturn = {
  tabs: Tab[]
  employee?: Omit<User, 'password'>
}

const useProfileTabs = (): UseProfileTabsReturn => {
  const { query } = useRouter();
  const userId = query.id as string;

  const { data } = useFindUserByIdQuery({
    variables: {
      findUserByIdId: userId,
    }
  })

  const employee = data?.findUserById
  const tabs: Tab[] = [
    {
      text: 'Basic Info',
      feature: <ProfileInfoSectionFeature employee={employee} />,
    },
    {
      text: 'Time off',
      feature: <EmployeeTimeOffFeature />,
    },
    {
      text: 'Salary',
      feature: <SalaryFeature />,
    },
    {
      text: 'Projects',
      feature: <ProjectsFeature />,
    },
    {
      text: 'Teams',
      feature: <TeamsFeature />,
    },
    {
      text: 'Documents',
      feature: <div><Text variant='heading2'>No Documents</Text></div>,
    },
  ]

  return { tabs, employee }
}

export default useProfileTabs
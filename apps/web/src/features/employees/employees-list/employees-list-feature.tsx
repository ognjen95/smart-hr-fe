import { createColumnHelper } from '@tanstack/react-table';
import { useRouter } from 'next/router';
import { FC, memo } from 'react'
import { Button, Input, Paper, Table } from 'ui-components'

import { EMPLOYMENT_BADGE_COLOR_MAPPER } from '~common/constants/colors';
import { ColorMapper } from '~common/types/types';

import FIlterAndSortForm from './employee-list-form/employee-list-filters-form';
import EmployeeCardTypeList from './employee-type-card-list';
import useEmployeeList from './use-employees-list';

import { User } from '~graphql-api';

const columnHelper = createColumnHelper<User>();
const columns = [
  columnHelper.accessor('firstName', {
    cell: (cell) => cell.getValue(),
  }),
  columnHelper.accessor('lastName', {
    cell: (cell) => cell.getValue(),
  }),
  columnHelper.accessor('email', {
    cell: (cell) => cell.getValue(),
  }),
  columnHelper.accessor('employmentStatus', {
    cell: (cell) => {
      const status = cell.getValue<ColorMapper>()
      return <span className={`daisy-badge ${EMPLOYMENT_BADGE_COLOR_MAPPER[status]} pb-1`}>{status}</span>
    },
    header: 'Employment Status',
  }),
]

type EmployeesListFeatureProps = {
  toggleRightDrawer: () => void
}

const EmployeesListFeature: FC<EmployeesListFeatureProps> = ({ toggleRightDrawer }) => {
  const { push, asPath } = useRouter()
  const onRowClick = (url: string) => push(`${asPath}/${url}`);

  const {
    employeesList,
    totalCount,
    searchTerm,
    handleSearch,
    handleFetchMore,
    form
  } = useEmployeeList()

  return (
    <>
      {/* Employee Type Header Cards */}
      <EmployeeCardTypeList />
      {/* Employees Table */}
      <div className='mt-2 rounded-xl' >
        <h1 className='mb-4 font-bold text-xl'>Employees Table</h1>
        <Paper noPadding>
          <div className="flex justify-between items-center px-3 py-1">
            <div className="flex justify-start items-center gap-2">
              <div className='w-64'>
                <Input
                  size='small'
                  placeholder='Search Employees'
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              {/* Filters and Sorting */}
              <FIlterAndSortForm form={form} />
            </div>
            <div className='flex items-center gap-8'>
              {/* <h1 className='mr-5'>{employeesList.length} of {totalCount} employees</h1> */}
              <Button size='small' onClick={() => toggleRightDrawer()}>
                Create new  Employee
              </Button>
            </div>
          </div>
          {/* TableList */}
          <Table<User>
            data={employeesList}
            columns={columns}
            onRowClick={onRowClick}
          />
          {/* Fetch More Button */}
          {totalCount !== employeesList.length && <div className="text-center">
            <Button variant='text' onClick={form.handleSubmit(handleFetchMore)}>
              Fetch More Employees ({employeesList.length} of {totalCount})
            </Button>
          </div>}
        </Paper >
      </div >
    </>
  )
}


export default memo(EmployeesListFeature)
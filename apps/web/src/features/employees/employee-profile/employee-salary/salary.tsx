import { createColumnHelper } from '@tanstack/react-table';
import React from 'react'
import { Table, Text } from 'ui-components';

import { Salary } from './types';
import useEmployeeSalaries from './use-employee-salaries';

const columnHelper = createColumnHelper<Salary>();
const columns = [
  columnHelper.accessor('date', {
    cell: (cell) => cell.getValue().toDateString(),
    header: 'DATE',
  }),
  columnHelper.accessor('gross1', {
    cell: (cell) => cell.getValue(),
    header: 'GROSS 1',
  }),
  columnHelper.accessor('gross2', {
    cell: (cell) => cell.getValue(),
    header: 'GROSS 2',
  }),
  columnHelper.accessor('net', {
    cell: (cell) => cell.getValue(),
    header: 'NET',
  }),
  columnHelper.accessor('incomeTax', {
    cell: (cell) => cell.getValue(),
    header: 'TAX (%)',
  }),
]


const SalaryFeature = () => {
  const { salaries } = useEmployeeSalaries()
  return (
    <div>
      <Text variant="heading2">Salaries</Text>
      <div className='mt-5'>
        <Table<Salary>
          data={salaries}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          columns={columns}
        />
      </div>
    </div>

  )
}

export default SalaryFeature
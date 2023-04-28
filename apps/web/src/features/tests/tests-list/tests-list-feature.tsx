import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { Dropdown, Input, Paper, Table } from "ui-components"

import useTestsList from "./use-tests-list";

import { TestEntity } from "~graphql-api"

const columnHelper = createColumnHelper<TestEntity>();
const columns = [
  columnHelper.accessor('name', {
    cell: (cell) => cell.getValue(),
    header: 'TEST NAME',
  }),
  columnHelper.accessor('questions', {
    cell: (cell) => cell.getValue().length.toString(),
    header: 'NO. QUESTIONS',
  }),
  columnHelper.accessor('percentageScored', {
    cell: (cell) => cell.getValue(),
    header: 'PERCENTAGE SCORED',
  }),
  columnHelper.accessor('percentageToPass', {
    cell: (cell) => cell.getValue().toString(),
    header: 'PERCENTAGE TO PASS',
  }),
  columnHelper.accessor('startedAt', {
    cell: (cell) => cell.getValue() ? cell.getValue()?.toString() : "Not Started",
    header: 'TEST STARTED AT',
  }),
  columnHelper.accessor('endsAt', {
    cell: (cell) => cell.getValue() ? cell.getValue()?.toString() : "Not Ended",
    header: 'TEST ENDS AT',
  }),
]

const TestsListFeature = () => {
  const { search, handleSetSearch, tests } = useTestsList()
  const { push } = useRouter()
  return (
    <>
      <div className="flex justify-between items-center py-1">
        <h1 className='font-bold text-xl'>Tests List </h1>
        <div className="flex justify-start items-center gap-2">
          <div className="w-64">
            <Input
              size='small'
              placeholder='Search Tests...'
              value={search}
              onChange={(e) => handleSetSearch(e.target.value)}
            />
          </div>
          <Dropdown label='Filter' items={[]} />
          <Dropdown label='Sort' items={[]} />
        </div>
      </div>
      <Paper noPadding>
        <Table<TestEntity>
          data={tests}
          columns={columns as []}
          onRowClick={(id) => push(`/company/tests/${id}`)}
        />
      </Paper>
    </>
  )
}

export default TestsListFeature
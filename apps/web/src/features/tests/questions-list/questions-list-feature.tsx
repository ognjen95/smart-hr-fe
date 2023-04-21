import { createColumnHelper } from '@tanstack/react-table';
import React, { useMemo } from 'react'
import { Dropdown, Input, Paper, Table } from 'ui-components'

import { QuestionEntity as Question, useFindAllQuestionQuery } from '~graphql-api';

const columnHelper = createColumnHelper<Question>();
const columns = [
  columnHelper.accessor('text', {
    cell: (cell) => cell.getValue(),
  }),
  columnHelper.accessor('questionGroup', {
    cell: (cell) => cell.getValue()?.name ?? 'No Group',
    header: 'Question Group',
  }),
  columnHelper.accessor('answers', {
    cell: (cell) => {
      const answer = cell.getValue();
      if (answer?.length === 0) return 'Type In answer'
      const correctAnswer = answer?.filter((item) => item.isCorrect)
      if (correctAnswer?.length === 1) return 'Single Choice'
      return 'Multiple Choice'
    },
    header: 'Type of Answer',
  }),
  columnHelper.accessor('points', {
    cell: (cell) => cell.getValue().toString()
  }),
]

const QuestionsListFeature = () => {
  const { data } = useFindAllQuestionQuery()
  const questions = useMemo(() => data?.findAllQuestion.edges.map((item) => item.node) ?? [], [data?.findAllQuestion.edges])

  return (
    <>
      <h1 className='mb-4 font-bold text-xl'>Questions List </h1>
      <Paper noPadding>
        <div className="flex justify-between items-center px-3 py-1">
          <div className="flex justify-start items-center gap-2">
            <div className="w-64">
              <Input
                size='small'
                placeholder='Search Questions'
              // value={}
              // onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Dropdown label='Filter' items={[]} />
            <Dropdown label='Sort' items={[]} />
          </div>
        </div>
        <Table<Question> data={questions} columns={columns} />
      </Paper>
    </>
  )
}

export default QuestionsListFeature
import { createColumnHelper } from '@tanstack/react-table';
import React, { FC, useMemo, useState } from 'react'
import { Control } from 'react-hook-form';
import { Dropdown, Input, Paper, Table } from 'ui-components'

import CheckboxField from '~components/form/fields/checkbox-field';
import { useDebounce } from '~hooks/use-debounce';

import { CreateTestModel } from '../create-test/types';

import { QuestionEntity as Question, useFindAllQuestionQuery } from '~graphql-api';

const columnHelper = createColumnHelper<Question>();
const columns = [
  columnHelper.accessor('text', {
    cell: (cell) => cell.getValue(),
    header: 'Text',
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
    cell: (cell) => cell.getValue().toString(),
    header: 'Points',
  }),
]

type QuestionsListFeatureProps = {
  control?: Control<CreateTestModel>
}

const QuestionsListFeature: FC<QuestionsListFeatureProps> = ({ control }) => {
  const [search, setSearch] = useState('')
  const searchedValue = useDebounce(search, 300)
  const { data } = useFindAllQuestionQuery({
    variables: {
      queryOptionsInput: {
        filters: {
          contains: searchedValue
        },
        pagination: {
          take: 10,
        }
      }
    }
  })

  const questions = useMemo(() => data?.findAllQuestion.edges.map((item) => item.node) ?? [], [data?.findAllQuestion.edges])

  return (
    <>
      <div className="flex justify-between items-center py-1">
        <h1 className='font-bold text-xl'>Questions List </h1>
        <div className="flex justify-start items-center gap-2">
          <div className="w-64">
            <Input
              size='small'
              placeholder='Search Questions...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Dropdown label='Filter' items={[]} />
          <Dropdown label='Sort' items={[]} />
        </div>
      </div>
      <Paper noPadding>
        <Table<Question>
          data={questions}
          columns={columns as []}
          {...control && { renderCheckbox: (idx: number, id: string) => <CheckboxField control={control} fieldName={`questionIds.${idx}`} customValue={id} /> }}
        />
      </Paper>
    </>
  )
}

export default QuestionsListFeature
import React, { FC } from 'react'
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form'
import { generateId } from 'src/helpers/generateId'
import { Button } from 'ui-components'

import Form from '~components/form'
import CheckboxField from '~components/form/fields/checkbox-field'
import InputField from '~components/form/fields/input-field'
import SelectField from '~components/form/fields/select/select-field'

import { POINTS_OPTIONS, QUESTION_GROUPS_OPTIONS } from '../constants'
import { CreateQuestionFormModel } from '../types'

type CreateQuestionFormProps = {
  form: UseFormReturn<CreateQuestionFormModel>
  fieldArray: UseFieldArrayReturn<CreateQuestionFormModel>
}

const CreateQuestionForm: FC<CreateQuestionFormProps> = ({ form, fieldArray }) => (
  <Form<CreateQuestionFormModel> form={form}>
    {({ control }) => (
      <>
        <div className="mb-4">
          <InputField fieldName='text' control={control} label='Question text' />
        </div>
        <div className='border-2 border-info p-2 rounded-xl'>
          <p className='text-sm'>Please create answers for this question and check if answer is correct.</p>
          <p className='text-sm'>If you don't want to offer any questions but make user type it click "No Answers" button.</p>
        </div>
        <div className='text-right'>
          {fieldArray.fields.map((item, index) => (
            <div className="mb-4 flex justify-end items-start gap-2" key={item.id}>
              <InputField fieldName={`answers.${index}.text`} control={control} label={`Answer ${index + 1}`} />
              <div className='flex items-center mt-9 gap-1'>
                <CheckboxField fieldName={`answers.${index}.isCorrect`} control={control} />
                <Button color='error' size='small' onClick={() => fieldArray.remove(index)}>X</Button>
              </div>
            </div>
          ))}
          <div className='flex justify-end items-center gap-2 my-2'>
            <Button
              size='small'
              variant='outlined'
              color='accent-content'
              onClick={() => fieldArray.remove()}
            >
              No answers
            </Button>
            <Button
              size='small'
              variant='outlined'
              color='success'
              onClick={() => fieldArray.append({ id: generateId(), text: '', answered: false, isCorrect: false })}
            >
              Add Answer
            </Button>
          </div>

        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <SelectField options={POINTS_OPTIONS} fieldName='points' control={control} label='Points' type='number' />
          <SelectField
            options={QUESTION_GROUPS_OPTIONS}
            fieldName='questionGroup' control={control} label='Question group' />
        </div>
      </>
    )}
  </Form >
)

export default CreateQuestionForm
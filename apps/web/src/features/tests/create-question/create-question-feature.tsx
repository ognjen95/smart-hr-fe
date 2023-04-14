import React, { FC } from 'react'
import { useFieldArray } from 'react-hook-form'
import { generateId } from 'src/helpers/generateId'
import { Button, DrawerContent, Modal } from 'ui-components'

import Form from '~components/form'
import CheckboxField from '~components/form/fields/checkbox-field'
import InputField from '~components/form/fields/input-field'

import { CreateQuestionFormModel } from './types'
import useCreateQuestion from './use-create-question'

type CreateQuestionProps = {
  toggleRightDrawer: () => void
}

const CreateQuestion: FC<CreateQuestionProps> = ({ toggleRightDrawer }) => {
  const { form, onSubmit, modal } = useCreateQuestion();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "answers",
  });
  return (
    <>
      <DrawerContent
        title='Create New Question'
        actionButtons={[
          <Button onClick={toggleRightDrawer} variant='text' key={1}>Close</Button>,
          <Button key={2} onClick={() => modal.open()}>Save New Question</Button>
        ]}
      >
        <Form<CreateQuestionFormModel> form={form}>
          {({ control }) => (
            <>
              <div className="mb-4">
                <InputField fieldName='text' control={control} label='Question text' />
              </div>
              <p>Please create answers for this question. Check if answer is correct.</p>
              <div className='text-right'>
                {fields.map((item, index) => (
                  <div className="mb-4 flex justify-end items-start gap-2" key={item.id}>
                    <InputField fieldName={`answers.${index}.text`} control={control} label={`Answer ${index + 1}`} />
                    <div className='flex items-center mt-9 gap-1'>
                      <CheckboxField fieldName={`answers.${index}.isCorrect`} control={control} />
                      <Button color='error' size='small' onClick={() => remove(index)}>X</Button>
                    </div>
                  </div>
                ))}
                <Button
                  size='small'
                  variant='outlined'
                  color='accent-content'
                  onClick={() => append({ id: generateId(), text: '', answered: false, isCorrect: false })}
                >
                  Add Answer
                </Button>
              </div>
              <div className="mb-4">
                <InputField fieldName='points' control={control} label='Points' type='number' />
              </div>
              <div className="mb-4">
                <InputField fieldName='questionGroup' control={control} label='Question group' />
              </div>
            </>
          )}
        </Form >
      </DrawerContent>
      <Modal
        title='Create New Employee'
        description='Are you sure you want to create a new question?'
        isOpen={modal.isOpen}
        leftButton={{
          buttonText: 'Cancel',
          onClick: modal.close
        }}
        rightButton={{
          buttonText: 'Create',
          onClick: () => {
            onSubmit(form.getValues())
          }
        }}
      />
    </>
  )
}

export default CreateQuestion
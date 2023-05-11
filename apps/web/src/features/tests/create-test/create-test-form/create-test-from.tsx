import React, { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Button } from 'ui-components'

import Form from '~components/form'
import InputField from '~components/form/fields/input-field'
import Modal from '~components/modal'
import QuestionsListFeature from '~features/tests/questions-list/questions-list-feature'
import useToggle from '~hooks/use-toggle'

import { CreateTestModel } from '../types'

type CreateTestFormProps = {
  form: UseFormReturn<CreateTestModel>
}

const CreateTestForm: FC<CreateTestFormProps> = ({ form }) => {
  const { open, close, isOpen } = useToggle()
  return (
    <Form<CreateTestModel> form={form} >
      {({ control }) => (
        <>
          <div className="mb-4">
            <InputField
              fieldName='name'
              control={control}
              label='Test name'
            />
          </div>
          <div className="mb-4">
            <InputField
              type='number'
              fieldName='percentageToPass'
              control={control}
              label='Percentage required to pass (%)'
            />
          </div>
          <div className="mb-4">
            <InputField
              type='number'
              fieldName='timeLimit'
              control={control}
              label='Time limit in minutes'
            />
          </div>
          <div className="mb-4">
            <Button fullWidth onClick={open}>
              Pick Questions for Test
            </Button>
            <Modal
              title='Pick Questions for Test'
              isOpen={isOpen}
              size='extra-large'
              rightButton={{
                buttonText: 'Close',
                onClick: close
              }}
            >
              <div className='h-[550px] z-0 overflow-y-scroll'>
                <QuestionsListFeature control={control} />
              </div>
            </Modal>
          </div>
        </>
      )}
    </Form>
  )
}

export default CreateTestForm
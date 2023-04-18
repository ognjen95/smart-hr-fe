import React, { FC, memo } from 'react'
import { Button, DrawerRight, Modal } from 'ui-components'

import CreateQuestionForm from './create-question-form/create-question-form'
import useCreateQuestion from './use-create-question'

type CreateQuestionProps = {
  toggleRightDrawer: () => void
  isOpen: boolean
}

const CreateQuestionFeature: FC<CreateQuestionProps> = ({ toggleRightDrawer, isOpen }) => {
  const { form, onSubmit, modal, fieldArray } = useCreateQuestion();

  return (
    <>
      <DrawerRight isOpen={isOpen} title='Create New Question'
        actionButtons={[
          <Button onClick={() => toggleRightDrawer()} variant='text' key={1}>Close</Button>,
          <Button key={2} onClick={() => modal.open()}>Save New Question</Button>
        ]}>

        <CreateQuestionForm form={form} fieldArray={fieldArray} />
      </DrawerRight>
      
      <Modal
        title='Create New Question'
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

export default memo(CreateQuestionFeature)
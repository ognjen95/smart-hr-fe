import React, { FC } from 'react'
import { Button, DrawerContent, Modal } from 'ui-components'

import CreateQuestionForm from './create-question-form/create-question-form'
import useCreateQuestion from './use-create-question'

type CreateQuestionProps = {
  toggleRightDrawer: () => void
}

const CreateQuestion: FC<CreateQuestionProps> = ({ toggleRightDrawer }) => {
  const { form, onSubmit, modal, fieldArray} = useCreateQuestion();

  return (
    <>
      <DrawerContent
        title='Create New Question'
        actionButtons={[
          <Button onClick={toggleRightDrawer} variant='text' key={1}>Close</Button>,
          <Button key={2} onClick={() => modal.open()}>Save New Question</Button>
        ]}
      >
        <CreateQuestionForm form={form} fieldArray={fieldArray} />
      </DrawerContent>
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

export default CreateQuestion
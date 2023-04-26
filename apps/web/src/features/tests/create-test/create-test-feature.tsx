import { FC } from 'react'
import { Button } from 'ui-components'

import DrawerRight from '~components/drawers'
import Modal from '~components/modal'

import CreateTestForm from './create-test-form/create-test-from'
import useCreateTest from './use-create-test'

type CreateTestFeatureProps = {
  toggleRightDrawer: () => void
  isOpen: boolean
}

const CreateTestFeature: FC<CreateTestFeatureProps> = ({
  isOpen,
  toggleRightDrawer,
}) => {
  const { form, modal, onSubmit } = useCreateTest()

  return (
    <>
      <DrawerRight isOpen={isOpen} title='Create New Test'
        actionButtons={[
          <Button onClick={() => toggleRightDrawer()} variant='text' key={1}>Close</Button>,
          <Button key={2} onClick={() => { modal.open() }}>Save New Test</Button>
        ]}>
        <CreateTestForm form={form} />
      </DrawerRight>

      <Modal
        title='Create New Test'
        description='Are you sure you want to create a new test?'
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

export default CreateTestFeature

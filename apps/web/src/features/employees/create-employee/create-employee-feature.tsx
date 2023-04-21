import React, { FC, memo } from 'react'
import { Button, DrawerRight, Modal } from 'ui-components'

import Form from '~components/form'
import InputField from '~components/form/fields/input-field'

import { CreateEmployeeFormModel } from './types'
import useCreateEmployee from './use-create-employee'

type CreateEmployeeFeatureProps = {
  toggleRightDrawer: () => void
  isOpen: boolean
}

const CreateEmployeeFeature: FC<CreateEmployeeFeatureProps> = ({ toggleRightDrawer, isOpen, }) => {
  const { form, onSubmit, modal } = useCreateEmployee();

  return (
    <>
      <DrawerRight
        isOpen={isOpen}
        title='Create New Employee'
        actionButtons={[
          <Button onClick={toggleRightDrawer} variant='text' key={1}>Close</Button>,
          <Button key={2} onClick={() => modal.open()}>Save New Employee</Button>
        ]}
      >
        <Form<CreateEmployeeFormModel> form={form}>
          {({ control }) => (
            <>
              <div className="mb-4">
                <InputField fieldName='firstName' control={control} label='First name' />
              </div>
              <div className="mb-4">
                <InputField fieldName='lastName' control={control} label='Last name' />
              </div>
              <div className="mb-4">
                <InputField fieldName='email' control={control} label='Email address' />
              </div>
              <div className="mb-4">
                <InputField fieldName='password' control={control} label='Password' />
              </div>
              <div className="mb-4">
                <InputField fieldName='confirmPassword' control={control} label='Confirm password' />
              </div>
              <div className="mb-4">
                <InputField fieldName='employeeStatus' control={control} label='Employee Status' />
              </div>
            </>
          )}
        </Form >
      </DrawerRight>
      <Modal
        title='Create New Employee'
        description='Are you sure you want to create a new employee?'
        isOpen={modal.isOpen}
        leftButton={{
          buttonText: 'Cancel',
          onClick: () => modal.close()
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

export default memo(CreateEmployeeFeature)
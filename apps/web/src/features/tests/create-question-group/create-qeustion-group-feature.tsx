import React, { FC } from 'react'
import { toast } from 'react-toastify'

import Form from '~components/form'
import InputField from '~components/form/fields/input-field'
import Modal from '~components/modal'
import useForm from '~hooks/use-form'
import useModal from '~hooks/use-toggle'

import { CreateQuestionGroupModel, DEFAULT_VALUES, VALIDATION_SCHEMA } from './constants'

import { FindAllQuestionGroupsDocument, useCreateQuestionGroupMutation } from '~graphql-api'



type CreateQuestionGroupFeatureProps = {
  isOpen: boolean
  toggle: () => void
}

const CreateQuestionGroupFeature: FC<CreateQuestionGroupFeatureProps> = ({
  isOpen, toggle
}) => {
  const form = useForm<CreateQuestionGroupModel>({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA
  })

  const { isOpen: IsConfirmationModalOpen, open, close } = useModal()
  const [createQuestionGroup] = useCreateQuestionGroupMutation()

  return (
    <div>
      <Modal
        size='small'
        title="Create Questions Pool"
        isOpen={isOpen}
        leftButton={{
          buttonText: 'Cancel',
          onClick: () => { toggle() }
        }}

        rightButton={{
          buttonText: 'Create',
          onClick: async () => {
            const isValid = await form.trigger()
            if (!isValid) return;

            open()
          }
        }}
      >
        <Form<CreateQuestionGroupModel> form={form}>
          {({ control }) => (
            <InputField
              control={control}
              placeholder='Type name of new question pool'
              fieldName="name"
              label="Question pool name"
            />
          )}
        </Form>
      </Modal>

      <Modal
        title="Create Questions Pool Confirmation"
        description='Are you sure you want to create new question pool?'
        isOpen={IsConfirmationModalOpen}
        leftButton={{
          buttonText: 'Cancel',
          onClick: () => { close() }
        }}

        rightButton={{
          buttonText: 'Confirm',
          onClick: () => {
            createQuestionGroup({
              onError: () => {
                close()
                toast.error('Something went wrong')
              },
              onCompleted: () => {
                close()
                toggle()
                form.reset()
                toast.success('Question pool created successfully')
              },
              refetchQueries: [FindAllQuestionGroupsDocument],
              variables: {
                createQuestionGroupInput: {
                  name: form.getValues().name
                }
              }
            })
          }
        }}
      />

    </div >
  )
}

export default CreateQuestionGroupFeature

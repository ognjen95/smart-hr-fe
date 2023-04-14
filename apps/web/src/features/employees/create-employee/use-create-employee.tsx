import useForm from '~hooks/use-form'
import useModal from '~hooks/use-modal'

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from './constants'
import { CreateEmployeeFormModel, UseCreateUser, UseCreateUserReturn } from './types'

import { useCreateUserMutation } from '~graphql-api'


const useCreateEmployee: UseCreateUser = (): UseCreateUserReturn => {
  const { isOpen, open, close } = useModal()
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA
  })

  const [createUser] = useCreateUserMutation({
    refetchQueries: ['FindAllUsers']
  })

  const onSubmit = (data: CreateEmployeeFormModel) => {
    createUser({
      onError: ({ graphQLErrors: [{ message }] }) => console.log(message),
      onCompleted: () => {
        form.reset()
        close()
      },
      variables: {
        createUserInput: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          employmentStatus: data.employeeStatus,
        }
      }
    })
  }

  return {
    form,
    onSubmit,
    modal: {
      open,
      isOpen,
      close
    },
  }
}

export default useCreateEmployee;

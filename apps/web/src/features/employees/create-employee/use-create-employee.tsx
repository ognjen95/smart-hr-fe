import { toast } from 'react-toastify'

import useForm from '~hooks/use-form'
import useToggle from '~hooks/use-toggle'

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from './constants'
import { CreateEmployeeFormModel, UseCreateUser, UseCreateUserReturn } from './types'

import { useCreateUserMutation } from '~graphql-api'


const useCreateEmployee: UseCreateUser = (): UseCreateUserReturn => {
  const { isOpen, open, close, toggle } = useToggle()
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA
  })

  const [createUser] = useCreateUserMutation({
    refetchQueries: ['FindAllUsers']
  })

  const onSubmit = (data: CreateEmployeeFormModel) => {
    createUser({
      onError: () => {
        close()
        toast.error("There was problem with creating user")
      },
      onCompleted: () => {
        form.reset()
        toast.success("User successfully created")
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

  const handleOpen = async () => {
    const isValid = await form.trigger()
    if (isValid) {
      open()
    }
  }

  return {
    form,
    onSubmit,
    modal: {
      open: handleOpen,
      isOpen,
      close,
      toggle
    },
  }
}

export default useCreateEmployee;

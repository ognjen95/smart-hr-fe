import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type CreateEmployeeFormModel = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  employeeStatus: 'employed' | 'interviewing';
};

export type UseCreateUserReturn = {
  form: UseFormReturn<CreateEmployeeFormModel>;
  onSubmit: SubmitHandler<CreateEmployeeFormModel>;
  isLoading?: boolean;
  modal: {
    open: () => void;
    close: () => void;
    isOpen: boolean;
  };
};

export type UseCreateUser = () => UseCreateUserReturn;

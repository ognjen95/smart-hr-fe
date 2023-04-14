import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import { UseToggleReturn } from '~hooks/use-toggle';

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
  modal: UseToggleReturn;
};

export type UseCreateUser = () => UseCreateUserReturn;

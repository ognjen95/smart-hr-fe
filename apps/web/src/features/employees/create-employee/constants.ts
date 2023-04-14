import { ObjectSchema, object, ref, string } from 'yup';

import { PASSWORD_VALID_REGEX } from '~features/common/constants';

import { CreateEmployeeFormModel } from './types';

export const DEFAULT_VALUES: CreateEmployeeFormModel = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  employeeStatus: 'employed',
};

export const VALIDATION_SCHEMA: ObjectSchema<CreateEmployeeFormModel>= object().shape({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().email().required('Email is required'),
  password: string()
  .required("Password is required")
  .test(
    "password",
    "Password must have at least 8 characters, both uppercase and lowercase characters and at least one number or one special character",
    (password) => {
      if (password && PASSWORD_VALID_REGEX.test(password)) return true;
      return false;
    }
  ),
confirmPassword: string()
  .oneOf([ref("password")], "Passwords must match")
  .required("Confirm password is required"),
  employeeStatus: string().oneOf(['employed', 'interviewing']).required(),
});

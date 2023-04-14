import { bool, object, ObjectSchema, string } from 'yup';

import { EmployeeFormModel } from './types';

export const FIELD_STATUS_ARCHIVED = 'statusFilters.archived';
export const FIELD_STATUS_EMPLOYED = 'statusFilters.employed';
export const FIELD_STATUS_INTERVIEWING = 'statusFilters.interviewing';

export const DEFAULT_VALUES: EmployeeFormModel = {
  statusFilters: {
    employed: false,
    interviewing: false,
    archived: false,
  },
  sortBy: 'desc',
};

export const VALIDATION_SCHEMA: ObjectSchema<EmployeeFormModel> =
  object().shape({
    statusFilters: object().shape({
      employed: bool().required(),
      interviewing: bool().required(),
      archived: bool().required(),
    }),
    sortBy: string().oneOf(['asc', 'desc']).required(),
  });

import { useMemo } from 'react'
import { UseFormReturn } from 'react-hook-form';

import useForm from '~hooks/use-form';

import { DEFAULT_VALUES, FIELD_STATUS_ARCHIVED, FIELD_STATUS_EMPLOYED, FIELD_STATUS_INTERVIEWING, VALIDATION_SCHEMA } from '../constants';
import { EmployeeFormModel } from '../types';


export type UseEmployeeListFilters = {
  statusFilters: string[];
  sortBy: 'asc' | 'desc';
  form: UseFormReturn<EmployeeFormModel>;
}

const useEmployeeListFilters = (): UseEmployeeListFilters => {
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });

  const employed = form.watch(FIELD_STATUS_EMPLOYED);
  const interviewing = form.watch(FIELD_STATUS_INTERVIEWING);
  const archived = form.watch(FIELD_STATUS_ARCHIVED);
  const sortBy = form.watch('sortBy');

  const statusFilters = useMemo(
    () =>
      [
        employed ? 'employed' : '',
        interviewing ? 'interviewing' : '',
        archived ? 'archived' : '',
      ].filter((item) => item !== ''),
    [archived, employed, interviewing]
  );
  return {
    statusFilters,
    sortBy,
    form,
  }
}

export default useEmployeeListFilters
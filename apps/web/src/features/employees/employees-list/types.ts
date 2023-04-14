import { UseFormReturn } from 'react-hook-form';

import { User } from '~graphql-api';

export type EmployeeFormModel = {
  statusFilters: {
    employed: boolean;
    interviewing: boolean;
    archived: boolean;
  };
  sortBy: 'asc' | 'desc';
};

export type UseEmployeeListResponse = {
  searchTerm: string;
  employeesList: User[];
  handleSearch: (search: string) => void;
  loading: boolean;
  handleFetchMore: () => void;
  totalCount: number;
  form: UseFormReturn<EmployeeFormModel>;
};

export type UseEmployeeList = () => UseEmployeeListResponse;

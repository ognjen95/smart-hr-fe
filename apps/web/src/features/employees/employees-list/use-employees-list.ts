import { useCallback, useMemo, useState } from 'react';

import { useDebounce } from '~hooks/use-debounce';

import useEmployeeListFilters from './employee-list-form/use-employee-list-filters';
import { UseEmployeeList, UseEmployeeListResponse } from './types';

import { PageInfo, User, useFindAllUsersQuery } from '~graphql-api';

const useEmployeeList: UseEmployeeList = (): UseEmployeeListResponse => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { statusFilters, form, sortBy } = useEmployeeListFilters();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, loading, fetchMore } = useFindAllUsersQuery({
    variables: {
      queryOptionsInput: {
        filters: {
          contains: debouncedSearchTerm,
          employeeStatus: {
            in: statusFilters,
          },
        },
        pagination: {
          orderBy: sortBy,
        },
      },
    },
  });

  const employeesList = useMemo(
    () => (data?.findAllUsers.edges.map((edge) => edge.node) as User[]) ?? [],
    [data]
  );

  const handleSearch = useCallback((search: string) => {
    setSearchTerm(search);
  }, []);

  // Fetch next page of employees
  const handleFetchMore = useCallback(() => {
    const { endCursor } = (data?.findAllUsers.pageInfo as PageInfo) || {};

    if (!endCursor) return;

    fetchMore({
      variables: {
        queryOptionsInput: {
          filters: {
            contains: debouncedSearchTerm,
            employeeStatus: {
              in: statusFilters,
            },
          },
          pagination: {
            skip: 1,
            cursor: endCursor ?? '',
          },
        },
      },
      updateQuery(previousQueryResult, newResults) {
        const previousResult = previousQueryResult;
        const newResult = newResults.fetchMoreResult;

        const newEdges = newResult.findAllUsers.edges;
        const { pageInfo } = newResult.findAllUsers;

        return {
          findAllUsers: {
            totalCount: previousResult.findAllUsers.totalCount,
            edges: [...previousResult.findAllUsers.edges, ...newEdges],
            pageInfo: pageInfo as PageInfo,
          },
        };
      },
    });
  }, [
    data?.findAllUsers.pageInfo,
    debouncedSearchTerm,
    fetchMore,
    statusFilters,
  ]);

  return {
    employeesList,
    handleSearch,
    searchTerm,
    loading,
    handleFetchMore,
    totalCount: data?.findAllUsers.totalCount ?? 0,
    form,
  };
};

export default useEmployeeList;

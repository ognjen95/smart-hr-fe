import { useState, useMemo, useCallback } from 'react'

import { useDebounce } from '~hooks/use-debounce'

import { TestEntity, useFindAllTestsQuery } from '~graphql-api'

type UseTestsListReturn = {
  tests: TestEntity[]
  search: string
  handleSetSearch: (searchTerm: string) => void
}

const useTestsList = (): UseTestsListReturn => {
  const [search, setSearch] = useState('')
  const searchedValue = useDebounce(search, 300)
  const { data } = useFindAllTestsQuery({
    variables: {
      queryOptionsInput: {
        filters: {
          contains: searchedValue
        },
        pagination: {
          take: 10,
        }
      }
    }
  })

  const tests = useMemo(() => data?.findAllTests.edges.map((item) => item.node) ?? [], [data?.findAllTests.edges])
  const handleSetSearch = useCallback((searchTerm: string) => { setSearch(searchTerm) }, [])

  return {
    tests,
    search,
    handleSetSearch
  }
}

export default useTestsList
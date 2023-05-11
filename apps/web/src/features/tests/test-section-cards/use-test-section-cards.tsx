import { useMemo } from 'react'

// import { CardColors } from '~common/types/types';
import { GLassCardProps } from '~components/cards/glass-card/glass-card';

import { useFindAllTestsQuery } from '~graphql-api';

type UseTestSectionCardReturnType = {
  tests: GLassCardProps[]
}

const useTestSectionCard = (): UseTestSectionCardReturnType => {
  const { data } = useFindAllTestsQuery({
    variables: {
      queryOptionsInput: {
        pagination: {
          take: 3,
        }
      }
    }
  })

  const tests: GLassCardProps[] = useMemo(() => data?.findAllTests.edges.map((edge) => ({
    title: edge.node.name,
    description: 'Click to view more or to add new tests.',
    // color: ['primary', 'secondary', 'accent'][index] as CardColors,
    button: {
      text: 'View More',
      url: `/company/tests/tests-list?${edge.node.name}`
    }
  })) ?? [], [data?.findAllTests.edges])

  return {
    tests
  }
}

export default useTestSectionCard
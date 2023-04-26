import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { Button } from 'ui-components';

import CollectionSection from '~components/collection-section/collection-section';

import useTestSectionCard from './use-test-section-cards';

type TestSectionCardsFeatureProps = {
  toggleCreateTest: () => void
}

const TestSectionCardsFeature: FC<TestSectionCardsFeatureProps> = ({ toggleCreateTest }) => {
  const { push } = useRouter();
  const { tests } = useTestSectionCard()
  return (
    <CollectionSection
      onCreate={toggleCreateTest}
      title='Tests'
      data={tests}
      buttons={[
        <Button key={1} size='small' variant='text' onClick={() => { push('/company/tests/tests-list') }}>See All</Button>,
      ]}
    />)
}

export default TestSectionCardsFeature
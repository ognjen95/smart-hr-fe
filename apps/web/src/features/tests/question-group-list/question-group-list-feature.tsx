import { useRouter } from 'next/router'
import { FC } from 'react'
import { Button } from 'ui-components'

import CollectionSection from '~components/collection-section/collection-section'

import useQuestionGroupList from './use-question-group-list'

type QuestionGroupListFeatureProps = {
  toggleCreateQuestionDrawer: () => void
  toggleCreatePoolModal: () => void
}

const QuestionGroupListFeature: FC<QuestionGroupListFeatureProps> = ({ toggleCreateQuestionDrawer, toggleCreatePoolModal }) => {
  const { push, asPath } = useRouter();
  const { questionGroups } = useQuestionGroupList()
  
  return (
    <CollectionSection
      onCreate={toggleCreatePoolModal}
      buttons={[
        <Button key={3} size='small' variant='text' onClick={toggleCreateQuestionDrawer}>Create New Questions Pool</Button>,
        <Button key={4} size='small' variant='text' onClick={() => push(`${asPath}/questions`)}>See All</Button>
      ]}
      data={questionGroups}
      title='Questions'
    />
  )
}

export default QuestionGroupListFeature
import { TEST_CARDS } from 'dummy-data/employee-data';
import { NextPage } from 'next';
import { Button } from 'ui-components';

import EmployeeTypeCard from '~components/cards/employee-type-card/employee-type-card';
import { GLassCardProps } from '~components/cards/glass-card/glass-card';
import CollectionSection from '~components/collection-section/collection-section';
import DashboardLayout from '~components/layouts/dashboard-layout';
import CreateQuestionFeature from '~features/tests/create-question/create-question-feature';
import CreateQuestionGroupFeature from '~features/tests/create-question-group/create-qeustion-group-feature';
import QuestionGroupListFeature from '~features/tests/question-group-list/question-group-list-feature';
import useToggle from '~hooks/use-toggle';

const CARDS: GLassCardProps[] = [
  {
    title: 'Java Questions',
    description: 'This is a collection of Java questions',
    color: 'primary',
    button: {
      text: 'View More',
      url: '/company/tests'
    }
  },
  {
    title: 'Javascript Questions',
    description: 'This is a collection of Javascript questions',
    color: 'secondary',
    button: {
      text: 'View More',
      url: '/company/tests'
    }
  },
  {
    title: 'NodeJS Questions',
    description: 'This is a collection of NodeJs questions',
    color: 'accent',
    button: {
      text: 'View More',
      url: '/company/tests'
    }
  },
]

const TestsPage: NextPage = () => {
  const { isOpen: isCreateQuestionOpen, toggle: toggleCreateQuestionOpen } = useToggle()
  const { isOpen: isCreatePoolOpen, toggle: toggleCreatePool } = useToggle()

  return (
    <DashboardLayout pageName='Tests'>
      <>
        <div className="grid grid-cols-3 gap-4 mb-5">
          {TEST_CARDS.map((card) => (
            <EmployeeTypeCard key={card.title} {...card} onClick={() => { }} />
          ))}
        </div>
        {/* Tests */}
        <CollectionSection
          onCreate={() => { }}
          title='Tests'
          data={CARDS}
          buttons={[
            <Button key={1} size='small' variant='text' onClick={() => { }}>See All</Button>,
          ]}
        />

        {/* Questions & Question Pools */}
        <QuestionGroupListFeature toggleCreateQuestionDrawer={toggleCreateQuestionOpen} toggleCreatePoolModal={toggleCreatePool} />
        <CreateQuestionGroupFeature isOpen={isCreatePoolOpen} toggle={toggleCreatePool} />
        <CreateQuestionFeature isOpen={isCreateQuestionOpen} toggleRightDrawer={toggleCreateQuestionOpen} />
      </>
    </DashboardLayout>
  )
}

export default TestsPage;

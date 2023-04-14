import { TEST_CARDS } from 'dummy-data/employee-data';
import { useState } from 'react';
import { Button } from 'ui-components';

import EmployeeTypeCard from '~components/cards/employe-type-card/employee-type-card';
import { GLassCardProps } from '~components/cards/glass-card/glass-card';
import CollectionSection from '~components/collection-section/collection-section';
import DashboardLayout from '~components/layouts/dashboard-layout';
import CreateQuestionModal from '~components/questions/create-question/create-question-modal';
import CreateQuestionFeature from '~features/tests/create-question/create-question-feature';
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

const TestsPage = () => {
  // const [isOpen, setIsOpen] = useState(false)
  const { isOpen, toggle } = useToggle()

  return (
    <>
      <DashboardLayout
        showRightDrawer={isOpen}
        toggleRightDrawer={toggle}
        rightDrawerComponent={<CreateQuestionFeature toggleRightDrawer={toggle} />}
      >
        <div className="grid grid-cols-3 gap-4 mb-5">
          {TEST_CARDS.map((card) => (
            <EmployeeTypeCard key={card.title} {...card} onClick={() => { }} />
          ))}
        </div>
        {/* Question Groups */}
        <CollectionSection
          title='Tests'
          data={CARDS}
          buttons={[
            <Button key={1} size='small' variant='text' onClick={() => { toggle() }}>Create New Question</Button>,
            <Button key={2} size='small' variant='text'>See All</Button>
          ]}
        />
        {/* Question Pool */}
        <CollectionSection
          buttons={[<Button key={2} size='small' variant='text'>See All</Button>]}
          data={CARDS}
          title='Question Pools'
        />
      </DashboardLayout>
      {/* Create New Question Modal */}
      {/* <CreateQuestionModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} /> */}
    </>
  )
}

export default TestsPage;

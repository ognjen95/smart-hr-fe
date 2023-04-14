import { TEST_CARDS } from 'dummy-data/employee-data';
import { useState } from 'react';

import EmployeeTypeCard from '~components/cards/employe-type-card/employee-type-card';
import { GLassCardProps } from '~components/cards/glass-card/glass-card';
import CollectionSection from '~components/collection-section/collection-section';
import DashboardLayout from '~components/layouts/dashboard-layout';
import CreateQuestionModal from '~components/questions/create-question/create-question-modal';

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <DashboardLayout>
        <div className="grid grid-cols-3 gap-4 mb-5">
          {TEST_CARDS.map((card) => (
            <EmployeeTypeCard key={card.title} {...card} onClick={() => { setIsOpen(true) }} />
          ))}
        </div>
        {/* Question Groups */}
        <CollectionSection
          title='Tests'
          data={CARDS}
        />
        {/* Question Pool */}
        <CollectionSection
          data={CARDS}
          title='Question Pools'
        />
      </DashboardLayout>
      {/* Create New Question Modal */}
      <CreateQuestionModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
    </>
  )
}

export default TestsPage;

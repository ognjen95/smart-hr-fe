import { TEST_CARDS } from 'dummy-data/employee-data';
import { NextPage } from 'next';

import EmployeeTypeCard from '~components/cards/employee-type-card/employee-type-card';
import DashboardLayout from '~components/layouts/dashboard-layout';
import CreateQuestionFeature from '~features/tests/create-question/create-question-feature';
import CreateQuestionGroupFeature from '~features/tests/create-question-group/create-qeustion-group-feature';
import CreateTestFeature from '~features/tests/create-test/create-test-feature';
import QuestionGroupListFeature from '~features/tests/question-group-list/question-group-list-feature';
import TestSectionCardsFeature from '~features/tests/test-section-cards/test-section-cards-feature';
import useToggle from '~hooks/use-toggle';

const TestsPage: NextPage = () => {
  const { isOpen: isCreateQuestionOpen, toggle: toggleCreateQuestionOpen } = useToggle()
  const { isOpen: isCreatePoolOpen, toggle: toggleCreatePool } = useToggle()
  const { isOpen: isCreateTestOpen, toggle: toggleCreateTest } = useToggle()

  return (
    <DashboardLayout pageName='Tests'>
      <>
        <div className="grid grid-cols-3 gap-4 mb-5">
          {TEST_CARDS.map((card) => (
            <EmployeeTypeCard key={card.title} {...card} onClick={() => { }} />
          ))}
        </div>
        <TestSectionCardsFeature toggleCreateTest={toggleCreateTest} />
        <CreateTestFeature isOpen={isCreateTestOpen} toggleRightDrawer={toggleCreateTest} />
        <QuestionGroupListFeature toggleCreateQuestionDrawer={toggleCreateQuestionOpen} toggleCreatePoolModal={toggleCreatePool} />
        <CreateQuestionGroupFeature isOpen={isCreateQuestionOpen} toggle={toggleCreateQuestionOpen} />
        <CreateQuestionFeature isOpen={isCreatePoolOpen} toggleRightDrawer={toggleCreatePool} />
      </>
    </DashboardLayout>
  )
}

export default TestsPage;

/* eslint-disable no-console */
import { useState } from "react";
import { Button, Input } from "ui-components";

import { AnswerTypeEnum } from "~common/enums/tests";
import CreateQuestionModal from "~components/questions/create-question/create-question-modal";
import Question from "~components/questions/question/question";


const Web = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="p-5">
      <Button onClick={() => {
        setIsOpen(true)
      }} fullWidth>
        Open Create Question Modal
      </Button>

      <CreateQuestionModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} />

      <Input label='Test input' size="large" textArea />
      <div className="mb-6" />

      <Question
        question='Is NodeJS blocking or non blocking programming language?'
        answers={[
          { text: 'Blocking', answered: false },
          { text: 'Non Blocking', answered: false },
          { text: 'Both', answered: false }
        ]}
        buttons={[
          <Button key='1' variant='outlined' onClick={() => console.log('btn clicked!')}>Previous Question</Button>,
          <Button key='2' variant='contained' color='primary' size='large' onClick={() => console.log('btn clicked!')}>Next Question</Button>
        ]}
      />

      <Question
        question='Is NodeJS blocking or non blocking programming language?'
        answerType={AnswerTypeEnum.TEXT}
        answers={[
          { text: 'Blocking', answered: false },
          { text: 'Non Blocking', answered: false },
          { text: 'Both', answered: false }
        ]}
        buttons={[
          <Button key='1' variant='outlined' onClick={() => console.log('btn clicked!')}>Previous Question</Button>,
          <Button key='2' variant='contained' color='primary' onClick={() => console.log('btn clicked!')}>Next Question</Button>
        ]}
      />

    </div>
  );
};

export default Web;

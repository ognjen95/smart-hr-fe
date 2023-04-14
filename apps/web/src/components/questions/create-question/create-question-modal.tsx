import React, { FC } from 'react'
import { Button, Input, Modal, RadioButtonCard } from 'ui-components'

export type CreateQuestionModalProps = {
  isOpen: boolean
  onClose: () => void
}

const CreateQuestionModal: FC<CreateQuestionModalProps> = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    title='Create Question'
    size="extra-large"
    leftButton={{ buttonText: 'Cancel', onClick: () => { onClose() } }}
    rightButton={{ buttonText: 'Create Question', onClick: () => { onClose() } }}
    onClose={() => { }}
  >
    <div className="mb-2">
      <h1 className="text-accent-content text-lg">1. Write your question</h1>
      <Input textArea />
    </div>

    <div className="mb-2">
      <h1 className="text-accent-content text-lg mb-4">2. Select one of answer types </h1>
      <div className="grid grid-cols-3 gap-3">
        <RadioButtonCard text="Single choice" />
        <RadioButtonCard text="Multiple choices" />
        <RadioButtonCard text="Write Answer" />
      </div>
    </div>

    <div className="mb-2">
      <h1 className="text-accent-content text-lg">3. Write answers</h1>
      {Array.from({ length: 3}).map((_, i) => (
        <div key={i} className="grid grid-cols-7 gap-2">
          <div className="col-span-5">
            <Input label='Answer' />
          </div>
          <Input label='Points' placeholder="Points" />
          <Input label='Correct answer?' placeholder="Yes / No" />
        </div>
      ))}
      <div className="flex justify-end">
        <Button>Add answer</Button>
      </div>
    </div>
  </Modal>
)

export default CreateQuestionModal
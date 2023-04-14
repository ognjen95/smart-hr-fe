import { useState } from 'react'
import { Button, Modal } from 'ui-components'

const ModalForTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => { setIsOpen(true) }}>
        Open
      </Button>

      <Modal
        title="Test modal"
        description='Modal for testing library'
        isOpen={isOpen}
        onClose={() => { setIsOpen(false) }}
        leftButton={{
          buttonText: "Cancel",
          onClick: () => { setIsOpen(false) }
        }}
        rightButton={{
          buttonText: "Ok",
          onClick: () => { setIsOpen(false) }
        }}
      />
    </>
  )
}

export default ModalForTest
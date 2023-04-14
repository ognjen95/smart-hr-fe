import { render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"

import ModalForTest from "./modal-for-test"

describe('Example Test', () => {
    it('Button should be visible', async () => {
        render(<ModalForTest />)

        const openModalButton = await screen.findByText('Open')
        expect(openModalButton).toBeInTheDocument()
        act(() => openModalButton.click())

        const modalTitle = await screen.findByText('Test modal')
        expect(modalTitle).toBeInTheDocument()

        const modalDescription = await screen.findByText('Modal for testing library')
        expect(modalDescription).toBeInTheDocument()

        const modalOkButton = await screen.findByText('Ok')
        expect(modalOkButton).toBeInTheDocument()

        const modalCancelButton = await screen.findByText('Cancel')
        expect(modalCancelButton).toBeInTheDocument()
    })
})
import { render, screen } from "@testing-library/react"

import Button from "./button"

describe('Example Test Components', () => {
    it('Button should be visible', async () => {
        render(<Button onClick={() => { }}>Open</Button>)

        const button = await screen.findByText('Open')
        expect(button).toBeInTheDocument()
    })
})
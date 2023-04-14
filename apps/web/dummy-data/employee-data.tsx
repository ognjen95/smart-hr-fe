export type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}

export const TEST_CARDS: {
    title: string,
    description?: string;
    color?: "success" | "warning" | "error";
}[] = [
        {
            title: 'Passed Tests (12)',
            description: 'List of passed tests by interviewee',
            color: 'success'
        },
        {
            title: 'Pending Tests (34)',
            description: 'List of pending tests by interviewee',
            color: 'warning'
        },
        {
            title: "Failed Tests (129)",
            description: 'List of failed tests by interviewee',
            color: 'error'
        }
    ]

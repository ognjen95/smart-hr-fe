import { FC } from "react"
import { Button } from "ui-components"

const NotFoundPage: FC = () => (
    <section className="bg-white dark:bg-base-100 h-full">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col justify-center items-center">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">400</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Page Not Found.</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">We are already working to solve the problem. </p>
            </div>
        <Button>Return To Dashboard</Button>
        </div>
    </section>
)

export default NotFoundPage
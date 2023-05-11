import { FC } from "react"

type LoaderProps = {
  isLoading?: boolean
}

const Loader: FC<LoaderProps> = ({ isLoading = false }) => (
  isLoading ? <div className="w-8 h-8 rounded-full animate-spin absolute right-10 top-10 border-8 border-solid border-primary border-t-transparent" /> : null
)

export default Loader
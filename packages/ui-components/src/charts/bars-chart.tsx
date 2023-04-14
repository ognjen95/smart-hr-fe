import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { FC } from "react"
import { Bar } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
export type BarsChartProps = { data: unknown }
const BarsChart: FC<BarsChartProps> = ({ data }) => (
    <Bar options={{ responsive: true }} data={data} />
)

export default BarsChart
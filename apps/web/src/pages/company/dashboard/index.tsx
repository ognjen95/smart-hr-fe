import { NextPage } from 'next';
import { BarsChart, Paper } from 'ui-components'

import DashboardLayout from '../../../components/layouts/dashboard-layout'
import EmployeeStats from '../../../components/stats/employee-stats'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random()),
      backgroundColor: 'rgba(140, 0, 255, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random()),
      backgroundColor: 'rgba(62, 53, 235, 0.5)',
    },
  ],
};

const DashboardPage: NextPage = () => (
  <DashboardLayout toggleRightDrawer={() => {}}>
    <>
      <EmployeeStats />
      <Paper>
        <div className='h-[450px] overflow-hidden w-full p-5 flex items-center justify-center'>
          <BarsChart data={data} />
        </div>
      </Paper>
    </>
  </DashboardLayout>
)

export default DashboardPage
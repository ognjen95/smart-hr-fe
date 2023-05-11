import { Text } from "ui-components"

import TimeOffCardList from "./time-off-card-list"
import useEmployeeTimeOff from "./use-employee-time-off"

const EmployeeTimeOffFeature = () => {
  const { timeOffs } = useEmployeeTimeOff()

  return (
    <div>
      <Text variant="heading2">Year {new Date().getFullYear()}</Text>
      <TimeOffCardList {...{ timeOffs }} />
    </div>
  )
}

export default EmployeeTimeOffFeature
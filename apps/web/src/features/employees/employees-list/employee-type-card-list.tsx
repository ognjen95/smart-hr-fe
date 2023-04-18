import EmployeeTypeCard from '~components/cards/employee-type-card/employee-type-card';

const EMPLOYEE_CARDS: {
  title: "Employed" | "Interviewing" | "Archived";
  description?: string;
  color?: "success" | "warning" | "error";
}[] = [
    {
      title: 'Employed',
      description: 'Employees who are currently employed',
      color: 'success'
    },
    {
      title: 'Interviewing',
      description: 'Employees in the interview process',
      color: 'warning'
    },
    {
      title: "Archived",
      description: 'Employees who are no longer employed',
      color: 'error'
    }
  ]

const EmployeeCardTypeList = () => (
  <div className="mb-5 grid grid-cols-3 gap-3 flex-wrap" >
    {
      EMPLOYEE_CARDS.map((card) => (
        <EmployeeTypeCard key={card.title} {...card} />
      ))
    }
  </div >
)

export default EmployeeCardTypeList
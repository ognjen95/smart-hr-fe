import { Salary } from "./types";

const useEmployeeSalaries = () => {
  const salaries: Salary[] = [
    {
      id: "1",
      date: new Date(),
      gross1: 3000,
      gross2: 2600,
      net: 2200,
      incomeTax: 21,
    },
    {
      id: "2",
      date: new Date(),
      gross1: 3000,
      gross2: 2600,
      net: 2200,
      incomeTax: 21,
    },
    {
      id: "3",
      date: new Date(),
      gross1: 3000,
      gross2: 2600,
      net: 2200,
      incomeTax: 21,
    },
    {
      id: "4",
      date: new Date(),
      gross1: 3000,
      gross2: 2600,
      net: 2200,
      incomeTax: 21,
    },
    {
      id: "5",
      date: new Date(),
      gross1: 3000,
      gross2: 2600,
      net: 2200,
      incomeTax: 21,
    },
    {
      id: "6",
      date: new Date(),
      gross1: 3000,
      gross2: 2600,
      net: 2200,
      incomeTax: 21,
    },
  ];

  return {
    salaries,
  };
};

export default useEmployeeSalaries;

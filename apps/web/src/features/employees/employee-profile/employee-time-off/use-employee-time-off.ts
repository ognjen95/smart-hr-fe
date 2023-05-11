import { TimeOff } from "./types";

const useEmployeeTimeOff = () => {
  const timeOffs: TimeOff[] = [
    {
      id: "1",
      type: "Paid Absence",
      available: 10,
      used: 5,
      pending: 2,
      remaining: 3,
    },
    {
      id: "2",
      type: "Paternity Leave",
      available: 10,
      used: 5,
      pending: 2,
      remaining: 3,
    },
    {
      id: "3",
      type: "Religious Holidays",
      available: 10,
      used: 5,
      pending: 2,
      remaining: 3,
    },
    {
      id: "4",
      type: "Free Sick Days",
      available: 10,
      used: 5,
      pending: 2,
      remaining: 3,
    },
    {
      id: "5",
      type: "Sick Leave",
      available: 10,
      used: 5,
      pending: 2,
      remaining: 3,
    },
    {
      id: "6",
      type: "Vacation 2022",
      available: 10,
      used: 5,
      pending: 2,
      remaining: 3,
    },
    {
      id: "7",
      type: "Vacation 2023",
      available: 10,
      used: 5,
      pending: 2,
      remaining: 3,
    },
  ];

  return {
    timeOffs,
  };
};

export default useEmployeeTimeOff;

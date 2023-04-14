import { useState, useEffect } from 'react';

type UseDebounce = (value: string, milliSeconds: number) => string;
export const useDebounce: UseDebounce = (value, milliSeconds = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
};

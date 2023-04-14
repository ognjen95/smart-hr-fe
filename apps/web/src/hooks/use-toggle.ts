import { useCallback, useState } from 'react';

export type UseToggleReturn = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const useToggle = (): UseToggleReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
};

export default useToggle;

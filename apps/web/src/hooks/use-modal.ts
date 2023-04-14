import { useCallback, useState } from 'react';

export type UseModalReturn = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
};

export default useModal;

import { useEffect, useState } from 'react';

const usePortal = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const body = document.querySelector('body');
    setRef(body);

    return () => {
      setRef(null);
    };
  }, []);

  return { ref };
};

export default usePortal;

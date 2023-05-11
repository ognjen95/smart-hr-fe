import { useEffect, useState } from "react";

const useInitialAnimation = (): boolean => {
  const [stopAnimation, setStopAnimation] = useState(false);

  useEffect(() => {
    const initialAnimation = setTimeout(() => {
      setStopAnimation(true);
    }, 1000);

    return () => {
      clearTimeout(initialAnimation);
    };
  }, []);

  return stopAnimation;
};

export default useInitialAnimation;

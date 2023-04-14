import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ErrorFallback = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/500");
  }, [push]);

  return <div />;
};

export default ErrorFallback;

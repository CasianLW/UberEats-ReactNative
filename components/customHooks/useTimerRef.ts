import { useEffect } from "react";

const useTimerRef = (initialTime, externalRef) => {
  useEffect(() => {
    externalRef.current = initialTime;
    const interval = setInterval(() => {
      externalRef.current = Math.max(externalRef.current - 1, 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [externalRef]);
};

export default useTimerRef;

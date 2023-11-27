import { useState, useEffect } from "react";

const useTimer = (initialTime) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timer;
};

export default useTimer;

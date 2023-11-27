// useOpeningStatus.js
import { useState, useEffect } from "react";

const useOpeningStatus = (openingHours) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const currentTime = new Date();
      const currentHours = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();

      const [openHours, openMinutes] = openingHours.open.split(":").map(Number);
      const [closeHours, closeMinutes] = openingHours.close
        .split(":")
        .map(Number);

      const isOpenNow =
        (currentHours > openHours ||
          (currentHours === openHours && currentMinutes >= openMinutes)) &&
        (currentHours < closeHours ||
          (currentHours === closeHours && currentMinutes < closeMinutes));

      setIsOpen(isOpenNow);
    };

    const interval = setInterval(checkIfOpen, 1000); // Check every second
    checkIfOpen(); // Initial check

    return () => clearInterval(interval);
  }, [openingHours]);

  return isOpen;
};

export default useOpeningStatus;

// src/ListCarContext.jsx
import React, { createContext, useContext, useState } from "react";

const ListCarContext = createContext();

export const ListCarProvider = ({ children }) => {
  const [filteredCars, setFilteredCars] = useState([]);
  const [rentalTime, setRentalTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(0);
  const [isCriteriaEmpty, setIsCriteriaEmpty] = useState(false);
  const [available, setAvailable] = useState(null);

  const handleFilter = () => {
    if (!rentalTime || !passengerCount || available === "default") {
      setIsCriteriaEmpty(true);
      setFilteredCars([]);
    } else {
      const filtered = cars.filter(
        (car) =>
          new Date(car.availableAt) > new Date(rentalTime) &&
          car.capacity >= passengerCount &&
          car.available === JSON.parse(available)
      );
      setFilteredCars(filtered);
      setIsCriteriaEmpty(false);
    }
  };

  return (
    <ListCarContext.Provider
      value={{
        filteredCars,
        rentalTime,
        passengerCount,
        isCriteriaEmpty,
        available,
        setRentalTime,
        setPassengerCount,
        handleFilter,
        setAvailable,
      }}
    >
      {children}
    </ListCarContext.Provider>
  );
};

export const useListCarsContext = () => {
  return useContext(ListCarContext);
};

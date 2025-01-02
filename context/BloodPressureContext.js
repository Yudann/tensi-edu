import React, { createContext, useContext, useState } from 'react';

const BloodPressureContext = createContext();

export const useBloodPressure = () => useContext(BloodPressureContext);

const BloodPressureProvider = ({ children }) => {
  const [bloodPressure, setBloodPressure] = useState({
    systolic: 120, // Default values
    diastolic: 80, // Default values
  });

  return (
    <BloodPressureContext.Provider value={{ bloodPressure, setBloodPressure }}>
      {children}
    </BloodPressureContext.Provider>
  );
};

export default BloodPressureProvider;

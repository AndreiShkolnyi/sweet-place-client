"use client";

const { createContext, useState, useContext, useCallback } = require("react");

const ReservationContext = createContext();

const initialState = { from: null, to: null };

export const ReservationProvider = ({ children }) => {
  const [range, setRange] = useState(initialState);
  const resetRange = useCallback(() => setRange(initialState), []);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);

  if (!context) throw new Error("Context used outside of ReservationProvider");

  return context;
};

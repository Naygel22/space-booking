import { createContext, useContext, useState, ReactNode } from "react";

type TemperatureContextType = {
  temperature: number;
  increaseTemperature: () => void;
  decreaseTemperature: () => void;
};

const TemperatureContext = createContext<TemperatureContextType | undefined>(undefined);

export const TemperatureProvider = ({ children }: { children: ReactNode }) => {
  const [temperature, setTemperature] = useState(22);

  const increaseTemperature = () => {
    setTemperature((prevTemp) => (prevTemp < 25 ? prevTemp + 1 : prevTemp));
  };

  const decreaseTemperature = () => {
    setTemperature((prevTemp) => (prevTemp > 16 ? prevTemp - 1 : prevTemp));
  };

  return (
    <TemperatureContext.Provider value={{ temperature, increaseTemperature, decreaseTemperature }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export const useTemperatureContext = () => {
  const ctx = useContext(TemperatureContext);
  if (!ctx) {
    throw new Error("Missing TemperatureContext, it's not wrapped in with Provider");
  }
  return ctx;
};

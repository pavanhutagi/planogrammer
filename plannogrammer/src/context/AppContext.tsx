"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  height: string;
  setHeight: (height: string) => void;
  width: string;
  setWidth: (width: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [height, setHeight] = useState("100");
  const [width, setWidth] = useState("100");

  return (
    <AppContext.Provider value={{ height, setHeight, width, setWidth }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
}

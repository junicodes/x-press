import React from "react";
import { createContext, useContext } from "react";
import { AppProvider } from "./App/AppProvider";
import { ContextProviderProps } from "./interfaces";

export const CombineContext = createContext<null>(null);

export default function CombineContextProvider({ children }: ContextProviderProps) {
  return (
    <AppProvider>
        {children}
    </AppProvider>
  );
}

export function useCombineContext() {
  return useContext(CombineContext);
}
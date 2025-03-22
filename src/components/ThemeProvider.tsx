import { createContext, useContext, ReactNode } from "react";

type ThemeProviderState = {
  theme: "light";
};

interface ThemeProviderProps {
  children: ReactNode;
  [key: string]: unknown;
}

const initialState: ThemeProviderState = {
  theme: "light",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Always use light theme
  const value = {
    theme: "light" as const,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

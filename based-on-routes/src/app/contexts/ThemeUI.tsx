import React, { createContext, useState, useMemo, ReactNode } from 'react';

interface ThemeUIContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeUIContext = createContext<ThemeUIContextType | undefined>(undefined);

interface ThemeUIProviderProps {
  children: ReactNode;
}

export const ThemeUIProvider: React.FC<ThemeUIProviderProps> = React.memo(({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeUIContext.Provider value={value}>
      {children}
    </ThemeUIContext.Provider>
  );
});

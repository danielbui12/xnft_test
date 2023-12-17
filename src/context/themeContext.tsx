import { commonStyle } from "../consts/styles";
import { createContext, useCallback, useContext, useState } from "react";

export type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme,
  themeStyle: Record<string, any>,
  toggleTheme: (theme: Theme) => void
}
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  themeStyle: {},
  toggleTheme: () => { }
})

const darkTheme = {
  ...commonStyle,
  backgroundColor: "black",
  color: "white",
};

const lightTheme = {
  ...commonStyle,
  backgroundColor: "white",
  color: "black",
};

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const themeStyle = theme === 'dark' ? darkTheme : lightTheme;
  const toggleTheme = () => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeStyle
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

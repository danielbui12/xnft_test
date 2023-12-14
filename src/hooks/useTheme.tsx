import { commonStyle } from "../consts/styles";
import { useCallback, useState } from "react";

export type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const themeStyle = theme === 'dark' ? darkTheme : lightTheme;
  const toggleTheme = useCallback(() => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  }, [])
  return {
    themeStyle,
    theme,
    toggleTheme
  };
}


const darkTheme = {
  ...commonStyle,
  backgroundColor: "black",
  fontColor: "white",
};

const lightTheme = {
  ...commonStyle,
  backgroundColor: "white",
  fontColor: "black",
};

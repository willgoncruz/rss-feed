import { createContext, useContext, useState } from 'react';
import type { ThemeConfig } from 'antd';
import { ConfigProvider } from 'antd';
import BaseTheme from './config';

type Props = {
  children: React.ReactNode;
};

type ThemeContextProps = ThemeConfig & {
  setTheme: (theme: ThemeConfig) => void;
};

const ThemeContext = createContext<ThemeContextProps>(undefined!);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeConfig>(BaseTheme);

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

import '../styles/globals.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeConfig } from 'antd';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, useThemeContext } from '../theme/context';
import { LanguageProvider } from '../language';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: ThemeConfig) => props.token && props.token.colorBgContainer};
  }
`;

const Body = () => {
  const theme = useThemeContext();

  useEffect(() => {
    document.body.style.backgroundColor = theme.token!.colorBgContainer!;
  }, [theme]);

  return <GlobalStyle theme={theme} />;
};

export default function RSSFeed({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Body />
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

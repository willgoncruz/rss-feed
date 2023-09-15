import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import Theme from '../theme/config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={Theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

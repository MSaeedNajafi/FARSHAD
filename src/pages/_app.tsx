import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="scroll-smooth">
    <Component {...pageProps} />
  </div>
);

export default MyApp;

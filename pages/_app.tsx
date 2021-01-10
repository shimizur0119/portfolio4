import { AppProps } from "next/app";
import "../styles/reset/destyle.scss";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

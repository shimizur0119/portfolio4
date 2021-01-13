import { AppProps } from "next/app";
import "../styles/reset/destyle.scss";
import "../styles/global.scss";
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

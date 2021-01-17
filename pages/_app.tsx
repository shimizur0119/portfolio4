import { AppProps } from "next/app";
import { Provider } from "react-redux"
import createStore from "../stores"
import "../styles/reset/destyle.scss";
import "../styles/global.scss";
import 'aos/dist/aos.css';

// function SafeHydrate({ children }: any) {
//   return (
//     <div suppressHydrationWarning>
//       {typeof window === 'undefined' ? null : children}
//     </div>
//   )
// }

function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore()
  return (
    // <SafeHydrate>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    // </SafeHydrate>
  );
}

export default MyApp;

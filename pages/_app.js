import "../styles/globals.css";
import TanstackQueryProvider from "../providers/TanstackQueryProvider";
import ContextProvider from "../providers/ContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <TanstackQueryProvider>
        <Component {...pageProps} />
      </TanstackQueryProvider>
    </ContextProvider>
  );
}

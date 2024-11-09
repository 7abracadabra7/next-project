import "../styles/globals.css";
import TanstackQueryProvider from "../providers/TanstackQueryProvider";
import ContextProvider from "../providers/ContextProvider";
import AuthProvider from "../providers/AuthProvider";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <TanstackQueryProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </TanstackQueryProvider>
    </ContextProvider>
  );
}

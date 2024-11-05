import '../styles/globals.css'
import TanstackQueryProvider from '../providers/TanstackQueryProvider'

export default function App({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <Component {...pageProps} />
    </TanstackQueryProvider>
  )
}

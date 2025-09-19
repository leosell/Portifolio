import type { Metadata } from 'next'
import '../styles/global.css'
import type { AppProps } from 'next/app'

export const metadata: Metadata = {
  title: "Leonardo Sell",
}

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
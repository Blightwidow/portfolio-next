import "@/styles/globals.css"
import "@fontsource/metropolis/all-400.css"
import type { AppProps } from "next/app"
import { Header } from "@/ui/shared/Header"
import { Footer } from "@/ui/shared/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

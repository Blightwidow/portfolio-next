import "@/styles/globals.css"
import "@/styles/normalize.css"
import "@/styles/skeleton.css"
import "@fontsource/metropolis/all-300.css"
import "@fontsource/spartan/400.css"
import "@fontsource/spartan/700.css"
import type { AppProps } from "next/app"
import { Header } from "@/ui/shared/Header"
import { Footer } from "@/ui/shared/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

import Head from "next/head"
import Link from "next/link"
import * as React from "react"

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact - Theo Dammaretz</title>
      </Head>
      <h1>Contact</h1>
      <p>Please choose the appropriate topic to get in touch. Thank you!</p>
      <ul>
        <li>
          <Link href="/contact/hiring">Business Proposal/Hiring</Link>
        </li>
        <li>
          <Link href="/contact/questions">Questions</Link>
        </li>
      </ul>
      <style jsx>{`
        p {
          font-weight: bold;
        }
      `}</style>
    </>
  )
}

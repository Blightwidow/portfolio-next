import Head from "next/head"
import * as React from "react"
import { Spacer } from "@/ui/shared/Spacer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiring - Contact - Theo Dammaretz</title>
      </Head>
      <h1>Hiring</h1>
      <p>If you have any questions regarding any of my work, you can contact me via the form below.</p>
      <p>
        <b>Do not</b> send any enquiry regarding hiring or consulting.
      </p>
      <Spacer units={5} />
      <form name="contact" method="POST" data-netlify="true">
        <div className="row">
          <div className="four columns">
            <label>Your Email:</label>
          </div>
          <div className="six columns offset-by-one">
            <input type="email" name="email" />
          </div>
        </div>
        <Spacer />
        <div className="row">
          <div className="four columns">
            <label>Message:</label>
          </div>
          <div className="six columns offset-by-one">
            <textarea name="message"></textarea>
          </div>
        </div>
        <Spacer />
        <p>
          <button type="submit">Send</button>
        </p>
        <style jsx>{`
          input,
          textarea {
            width: 100%;
          }
        `}</style>
      </form>
    </>
  )
}

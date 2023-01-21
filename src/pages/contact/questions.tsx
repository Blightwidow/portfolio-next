import Head from "next/head"
import * as React from "react"
import { Spacer } from "@/ui/shared/Spacer"

export default function Home() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

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
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="hidden-field"
        onSubmit={(event) => {
          event.preventDefault()
          setIsSubmitting(true)
          setIsSuccess(false)

          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              // @ts-ignore
              email: event.target.elements.email.value,
              // @ts-ignore
              message: event.target.elements.email.value,
              formName: "contact",
            }).toString(),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }

              setIsSuccess(true)
              setIsSubmitting(true)
            })
            .catch((error) => console.error(error))
        }}
      >
        <input name="hidden-field" style={{ display: "none" }} />
        <div className="row">
          <div className="four columns">
            <label htmlFor="email">Your Email:</label>
          </div>
          <div className="six columns offset-by-one">
            <input type="email" name="email" />
          </div>
        </div>
        <Spacer />
        <div className="row">
          <div className="four columns">
            <label htmlFor="message">Message:</label>
          </div>
          <div className="six columns offset-by-one">
            <textarea name="message" />
          </div>
        </div>
        <Spacer />
        <p>
          <button type="submit" disabled={isSubmitting}>
            Send
          </button>
        </p>
        <Spacer />
        {isSuccess && <p>Your message was submitted successfully</p>}
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

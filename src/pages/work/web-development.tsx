import Head from "next/head"
import * as React from "react"
import Link from "next/link"

import alan from "@/media/alan-screenshot.png"
import dammaretz from "@/media/dammaretz-screenshot.png"
import lcdr from "@/media/lcdr-screenshot.png"
import thefork from "@/media/thefork-screenshot.png"
import { ImageCard } from "@/ui/shared/ImageCard"
import { Spacer } from "@/ui/shared/Spacer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Dev - Work - Theo Dammaretz</title>
      </Head>
      <Link href="/work">← Go Back</Link>
      <Spacer units={3} />
      <h1>Web Development</h1>
      <p>
        I have been building website for more than 6 years. These projects have range from small portfolios, like the one you are on right
        now, to massive multimillion dollars company homepages.
      </p>
      <p>
        I am a firm believe that getting things done is the key to success. As such I tend to avoid flashy new tech and keep to the basics.
        Most of my work use React, NextJS and a backend with the appropriate language for the job.
      </p>
      <p>
        That does not prevent me from also checking out new things and trying things. Below are some examples that I can share of projects I
        had a big contribution to.
      </p>
      <Spacer units={3} />
      <div className="row">
        <div className="one-half column">
          <ImageCard image={alan} title="Alan" href="https://alan.com" width={400} />
          <Spacer units={2} />
        </div>
        <div className="one-half column">
          <ImageCard image={thefork} title="TheFork" href="https://thefork.fr" width={400} />
          <Spacer units={2} />
        </div>
      </div>
      <div className="row">
        <div className="one-half column">
          <ImageCard image={lcdr} title="Le courrier de russie" width={400} />
          <Spacer units={2} />
        </div>
        <div className="one-half column">
          <ImageCard image={dammaretz} title="This website" width={400} />
          <Spacer units={2} />
        </div>
      </div>
    </>
  )
}

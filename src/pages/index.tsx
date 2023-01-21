import * as React from "react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"

import cover3 from "@/media/cover.png"
import Head from "next/head"
import { Spacer } from "@/ui/shared/Spacer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Theo Dammaretz</title>
      </Head>
      <div className="row">
        <div className="seven columns">
          <ExportedImage
            src={cover3}
            alt="profile picture of Theo"
            priority
            placeholder="blur"
            style={{ maxWidth: "100%", height: "auto" }}
            sizes="(max-width: 769px) 361px, 629px"
          />
          <Spacer units={2} />
        </div>
        <div className="four columns offset-by-one">
          <h1>ABOUT</h1>
          <p>
            My name is Theo Dammaretz, and for the most part I am a Frontend Engineer. I&apos;ve started in 2016 and have been passionate
            about it ever since.
          </p>
          <p>I am also very curious and will take any opportunity to gather new skills, like being a beer brewer, barista, soldier...</p>
          <p>
            You can have a glance at most of <Link href="/work">my work</Link> or you can check my <Link href="/resume">Resume</Link>{" "}
            directly.
          </p>
          <p>
            You can get in touch with me <Link href="/contact">from my contact page</Link>.
          </p>
        </div>
      </div>
    </>
  )
}

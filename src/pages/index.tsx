import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import cover from "@/media/cover.jpg"
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
          <Image
            src={cover}
            alt="profile picture of Theo"
            priority
            width={629}
            placeholder="blur"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Spacer units={2} />
        </div>
        <div className="four columns offset-by-one">
          <h1>ABOUT</h1>
          <p>
            My name is Theo Dammaretz, and for the most part I am a Frontend Engineer. I&apos;ve started in 2016 and have been pasionate
            about it ever since.
          </p>
          <p>I am also very curious and will take any opportunity to gather new skills, like being a beer brewer, barista, soldier...</p>
          <p>
            You can have a glance at most of my work <Link href="/work">here</Link> or you can check my <Link href="/resume">Resume</Link>{" "}
            directly.
          </p>
          <p>
            You can get in touch with me <Link href="/contact-me">here</Link>.
          </p>
        </div>
      </div>
    </>
  )
}

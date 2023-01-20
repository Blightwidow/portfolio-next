import Head from "next/head"
import * as React from "react"

import webdev from "@/media/web-dev.jpg"
import ai from "@/media/ai.jpg"
import { ImageCard } from "@/ui/shared/ImageCard"

export default function Home() {
  return (
    <>
      <Head>
        <title>Work - Theo Dammaretz</title>
      </Head>
      <div className="row">
        <div className="four columns">
          <div>
            <ImageCard image={webdev} title="Web Development" href="/work/web-development" width={341}/>
          </div>
        </div>
        <div className="four columns">
          <ImageCard image={ai} title="Artificial Intelligence" href="/work/ai"  width={341}/>
        </div>
      </div>
    </>
  )
}

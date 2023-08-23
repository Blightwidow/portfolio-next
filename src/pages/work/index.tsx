import Head from "next/head"
import * as React from "react"

import webdev from "@/media/web-dev.jpg"
import ai from "@/media/ai.jpg"
import data from "@/media/data.jpg"
import { ImageCard } from "@/ui/shared/ImageCard"

export default function Home() {
  return (
    <>
      <Head>
        <title>Work - Theo Dammaretz</title>
      </Head>
      <div className="row">
        <div className="four columns">
            <ImageCard
              image={webdev}
              title="Web Development"
              href="/work/web-development"
              width={341}
              alt="a photo of a computer"
              sizes="(max-width: 549px) 100vw, 33vw"
            />
        </div>
        <div className="four columns">
          <ImageCard
            image={ai}
            title="Artificial Intelligence"
            href="/work/ai"
            width={341}
            alt="a 3d render of an android robot"
            sizes="(max-width: 549px) 100vw, 33vw"
          />
        </div>
        <div className="four columns">
          <ImageCard
            image={data}
            title="Open Data"
            href="https://data.dammaretz.fr"
            width={341}
            alt="a 3d render of an android robot"
            sizes="(max-width: 549px) 100vw, 33vw"
          />
        </div>
      </div>
    </>
  )
}

import Head from "next/head"
import * as React from "react"
import Link from "next/link"

import astronaut from "@/media/sd-astronaut.png"
import color from "@/media/sd-color.png"
import painting from "@/media/sd-painting.jpeg"
import potter from "@/media/sd-potter.png"
import { ImageCard } from "@/ui/shared/ImageCard"
import { Spacer } from "@/ui/shared/Spacer"

export default function Home() {
  return (
    <>
      <Head>
        <title>AI - Work - Theo Dammaretz</title>
      </Head>
      <Link href="/work">← Go Back</Link>
      <Spacer units={3} />
      <h1>Artificial Intelligence</h1>
      <p>I am also a big fan of AI and the achievement that developers and humanity at large achieved through them.</p>
      <p>
        I have been dabbling especially in Text-to-Image models and how to use them both in personal and professional context. Below is a
        sample of the favorite images that I generated.
      </p>
      <p>
        If you are also curious about it, you can send your questions through the <Link href="/contact/questions">contact me page</Link>
      </p>
      <Spacer units={3} />
      <div className="row">
        <div className="one-half column">
          <ImageCard
            image={astronaut}
            title="Myself as an astronaut"
            width={400}
            alt="an ai generated image of myself as an astronaut"
            sizes="(max-width: 549px) 100vw, 50vw"
          />
          <Spacer units={2} />
        </div>
        <div className="one-half column">
          <ImageCard
            image={color}
            title="My new profile pricture"
            width={400}
            alt="an ai generated image of myself with a colorful background"
            sizes="(max-width: 549px) 100vw, 50vw"
          />
          <Spacer units={2} />
        </div>
      </div>
      <div className="row">
        <div className="one-half column">
          <ImageCard
            image={potter}
            title="Myself as Harry Potter"
            width={400}
            alt="an ai generated image of myself as harry potter"
            sizes="(max-width: 549px) 100vw, 50vw"
          />
          <Spacer units={2} />
        </div>
        <div className="one-half column">
          <ImageCard
            image={painting}
            title="A colorful painting of myself"
            width={400}
            alt="an ai generated image of myself with a colorful background"
            sizes="(max-width: 549px) 100vw, 50vw"
          />
          <Spacer units={2} />
        </div>
      </div>
    </>
  )
}

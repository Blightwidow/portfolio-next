import Head from "next/head"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import * as React from "react"

import webdev from "@/media/web-dev.jpg"
import ai from "@/media/ai.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Work - Theo Dammaretz</title>
      </Head>
      <div className="row">
        <div className="four columns">
          <div>
            <Card image={webdev} title="Web Development" href="/work/web-development" />
          </div>
        </div>
        <div className="four columns">
          <Card image={ai} title="Artificial Intelligence" href="/work/ai" />
        </div>
      </div>
    </>
  )
}

type CardProps = {
  image: StaticImageData
  title: string
  href: string
}

function Card({ href, image, title }: CardProps) {
  return (
    <div className="wrapper">
      <Image
        src={image}
        alt="image of a computer screen with code on it"
        priority
        width={341}
        objectFit="cover"
        placeholder="blur"
        style={{ maxWidth: " 100%", height: "auto" }}
      />
      <Link
        href={href}
        style={{
          display: "block",
          border: "none",
          padding: "0.8rem 0",
        }}
      >
        <span>{title}</span>
      </Link>
      <style jsx>{`
        .wrapper {
          position: relative;
          text-transform: uppercase;
          text-align: center;
        }
        .wrapper:hover {
          transition: opacity 0.2s ease-in-out;
          opacity: 0.75;
        }
        span::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

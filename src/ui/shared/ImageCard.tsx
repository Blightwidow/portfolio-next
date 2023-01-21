import { ImageProps, StaticImageData } from "next/image"
import Link from "next/link"
import * as React from "react"
import ExportedImage from "next-image-export-optimizer"

type ImageCardProps = {
  image: StaticImageData
  width?: number
  title: string
  href?: string
} & Omit<ImageProps, "src">

export function ImageCard({ href, image, title, width, ...props }: ImageCardProps) {
  const Component = Boolean(href)
    ? (props: any) => <Link href={href} {...props} rel={href?.startsWith("http") ? "nofollow" : undefined} />
    : "span"

  return (
    <div className="wrapper">
      <ExportedImage
        src={image}
        priority
        placeholder="blur"
        style={{ maxWidth: " 100%", height: "auto", border: "1px solid rgba(var(--primary-color-rgb), 0.1)" }}
        {...props}
      />
      <Component
        style={{
          display: "block",
          border: "none",
          padding: "0.8rem 0",
        }}
      >
        <span>{title}</span>
      </Component>
      <style jsx>{`
        .wrapper {
          position: relative;
          text-transform: uppercase;
          text-align: center;
        }
        .wrapper:hover {
          transition: opacity 0.2s ease-in-out;
          opacity: ${Boolean(href) ? 0.75 : 1};
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

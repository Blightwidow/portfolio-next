import * as React from "react"
import Link from "next/link"

import Head from "next/head"
import { getAllPostByDate, Post } from "@/lib/posts"
import { Spacer } from "@/ui/shared/Spacer"

const PROJECTS = [
  { name: "Alan", link: "https://alan.com", description: "Landing pages for the digital French health insurer" },
  { name: "TheFork", link: "https://thefork.com", description: "A restaurant booking and discovery app" },
]

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Theo Dammaretz</title>
      </Head>
      <p>
        Hey there, I&apos;m Theo Dammaretz, and for the most part I am a Frontend Engineer. I&apos;ve started in 2016 and have been
        passionate about it ever since. I also have a knack for writing down random thoughts in my blog.
      </p>
      <Spacer units={1} />
      <h2>Projects</h2>
      <div className="projects">
        {PROJECTS.map((project) => (
          <div key={project.name}>
            <a href={project.link} rel="noopener noreferrer">
              {project.name}
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <Spacer units={1} />
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
            <time>{post.date}</time>
          </li>
        ))}
      </ul>
      <style jsx>{`
        li {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .projects {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: .5rem;
          grid-row-gap: 1rem;
        }
        @media (min-width: 550px) {
          .projects {
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 1rem;
            grid-row-gap: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostByDate("desc")

  return {
    props: {
      posts,
    },
  }
}

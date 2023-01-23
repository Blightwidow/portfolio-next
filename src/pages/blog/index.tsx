import * as React from "react"
import Link from "next/link"

import Head from "next/head"
import { Spacer } from "@/ui/shared/Spacer"
import { getAllPostByDate, Post } from "@/lib/posts"

export default function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Blog - Theo Dammaretz</title>
      </Head>
      <h1>Blog</h1>
      <Spacer units={4} />
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          {Boolean(post.subtitle) && <p>{post.subtitle}</p>}
          <time>{post.date}</time>
          <Spacer units={3} />
        </div>
      ))}
      <style jsx>{`
        time {
          opacity: 0.6;
        }
        h3 {
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 0rem;
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

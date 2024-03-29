import * as React from "react"
import Head from "next/head"
import { GetStaticPropsContext } from "next/types"

import { Post, getAllPostIds, getPostData } from "@/lib/posts"
import { Spacer } from "@/ui/shared/Spacer"

export default function PostPage({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{`${post.title} - Theo Dammaretz`}</title>
      </Head>
      <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ id: Post["id"] }>) {
  if (!params) {
    return {
      props: {
        postData: {},
      },
    }
  }

  const post = await getPostData(params.id)
  return {
    props: {
      post,
    },
  }
}

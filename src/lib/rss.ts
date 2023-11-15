import RSS from "rss"
import fs from "fs"

import { Post } from "./posts"

export async function generateRssFeed(posts: Post[]) {
  const feed = new RSS({
    title: "Blog posts | RSS Feed",
    site_url: "https://dammaretz.fr",
    feed_url: `https://dammaretz.fr/feed`,
    pubDate: new Date(),
  })

  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.subtitle || "",
      url: `https://dammaretz.fr/blog/${post.id}`,
      date: post.date,
    })
  })

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }))
}

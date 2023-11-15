import * as fs from "fs"
import matter from "gray-matter"
import path from "path"
import { remark } from "remark"
import html from "remark-html"
import { differenceInHours, format, parse } from "date-fns"

const POST_DIR = "./src/data/posts"

export type Post = {
  id: string
  title: string
  subtitle?: string
  contentHtml: string
  seoTitle?: string
  date: string
}

export type RawPost = {
  id: string
  title: string
  contentHtml: string
  date: Date
  seoTitle?: string
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(POST_DIR)

  return fileNames
    .filter((fileName) => fileName.match(/\.md$/))
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
      }
    })
}

export async function getAllPostByDate(order: "asc" | "desc"): Promise<Post[]> {
  const fileNames = fs.readdirSync(POST_DIR)

  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.match(/\.md$/))
      .map((fileName) => fileName.replace(/\.md$/, ""))
      .map(parsePost)
  )

  return posts
    .sort((a, b) => {
      return order === "asc" ? differenceInHours(a.date, b.date) : differenceInHours(b.date, a.date)
    })
    .map((post) => ({
      ...post,
      date: format(post.date, "dd MMM yyyy"),
    }))
}

export async function getPostData(id: string): Promise<Post> {
  const { date, ...rest } = await parsePost(id)

  return {
    date: format(date, "dd MMM yyyy"),
    ...rest,
  }
}

async function parsePost(id: string): Promise<RawPost> {
  const fullPath = path.join(POST_DIR, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    ...matterResult.data,
    id,
    title: matterResult.data.title || "Missing title",
    date: parse(matterResult.data.date, "dd/MM/yyyy", new Date()),
    contentHtml,
  }
}

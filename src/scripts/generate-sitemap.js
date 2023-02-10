const fs = require("fs")
const globby = require("globby")

function addPage(page) {
  const path = page.replace(".html", "").replace("out", "").replace("/index", "/")

  return `  <url>
    <loc>${`https://dammaretz.fr${path}`}</loc>
    <changefreq>daily</changefreq>
  </url>`
}

async function generateSitemap() {
  const pages = await globby(["out/**/*.html", "!out/404.html"])
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(addPage).join("\n")}</urlset>`

  fs.writeFileSync("out/sitemap.xml", sitemap)
}

generateSitemap()

import * as React from "react"
import { SitemapIcon } from "../icons/SitemapIcon"
import { RssIcon } from "../icons/RssIcon"
import { GithubIcon } from "../icons/GithubIcon"
import { LinkedinIcon } from "../icons/LinkedinIcon"

export const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <hr />
      <div className="wrapper">
        <p>Theo Dammaretz</p>
        <ul>
          <li>
            <a href="/rss.xml">
              <RssIcon width={16} height={16} />
            </a>
          </li>
          <li>
            <a href="/sitemap.xml">
              <SitemapIcon width={16} height={16} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Blightwidow/" rel="noopener noreferrer">
              <GithubIcon width={16} height={16} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theodammaretz/" rel="noopener noreferrer">
              <LinkedinIcon width={16} height={16} />
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        footer {
          margin-top: 4rem;
        }
        .wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          display: flex;
          flex-direction: row;
          list-style: none;
          opacity: 0.8;
          margin: 0;
        }
        li {
          margin: 0;
          padding: 0 0.4rem;
        }
        a {
          text-decoration: none;
        }
        @media (min-width: 550px) {
          footer {
            margin-top: 6rem;
          }
        }
      `}</style>
    </footer>
  )
}

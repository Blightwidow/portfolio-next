import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Header: React.FunctionComponent = () => {
  const { asPath } = useRouter()
  const getLinks = React.useCallback(
    (): { href: string; label: string; folder: boolean }[] => [
      { href: "/", label: "about", folder: false },
      { href: "/resume", label: "resume", folder: false },
      { href: "/work", label: "work", folder: true },
      { href: "https://dammaretz.medium.com", label: "blog ↗", folder: false },
      { href: "/contact", label: "contact me", folder: true },
    ],
    []
  )

  return (
    <div id="header" role="banner" className="container">
      <nav role="navigation">
        <p>
          <Link href="/">Theo Dammaretz</Link>
        </p>
        <ul>
          {getLinks().map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={isActive(link.href, asPath, link.folder) ? undefined : "inactive"}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        div {
          padding: 4rem 0;
        }
        nav {
          display: flex;
          justify-content: space-between;
          text-transform: uppercase;
          font-family: var(--heading-font-family);
        }
        p {
          font-weight: 700;
          font-size: 3.6rem;
          margin: 0;
        }
        ul {
          display: flex;
        }
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1.5rem;
          font-size: 1.3rem;
          letter-spacing: -0.05rem;
        }
        @media (min-width: 550px) {
          div {
            padding: 8.5rem 0;
          }
        }
      `}</style>
    </div>
  )
}

function isActive(href: string, currentPath: string, folder: boolean): boolean {
  if (folder) {
    return currentPath.startsWith(href)
  }

  return currentPath === href
}

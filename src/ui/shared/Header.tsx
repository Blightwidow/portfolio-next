import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Header: React.FunctionComponent = () => {
  const { asPath, ...rest } = useRouter()
  const getLinks = React.useCallback(
    (): { href: string; label: string; folder: boolean }[] => [{ href: "/blog", label: "blog", folder: true }],
    []
  )
  const parent = asPath.split("/").slice(0, -1).join("/") || "/"

  return (
    <header id="header" role="banner">
      <nav role="navigation">
        {asPath === "/" ? <h1>theo dammaretz</h1> : <Link href={parent}>← back</Link>}
        <ul>
          {getLinks().map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{ textDecoration: "none" }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          display: flex;
          flex-direction: row;
          list-style: none;
          opacity: 0.7;
          margin: 0;
        }
        li {
          margin: 0;
        }
        h1 {
          font-size: 1rem;
          font-weight: normal;
          margin: 0;
        }
      `}</style>
    </header>
  )
}

function isActive(href: string, currentPath: string, folder: boolean): boolean {
  if (folder) {
    return currentPath.startsWith(href)
  }

  return currentPath === href
}

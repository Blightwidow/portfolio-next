import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Header: React.FunctionComponent = () => {
  const { asPath } = useRouter()
  const [extendMenu, setExtendMenu] = React.useState(false)
  const getLinks = React.useCallback(
    (): { href: string; label: string; folder: boolean }[] => [
      { href: "/", label: "about", folder: false },
      { href: "/resume", label: "resume", folder: false },
      { href: "/work", label: "work", folder: true },
      { href: "/blog", label: "blog", folder: true },
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
              <Link
                href={link.href}
                className={isActive(link.href, asPath, link.folder) ? undefined : "inactive"}
                onClick={() => setExtendMenu(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => setExtendMenu(!extendMenu)} aria-label="toggle menu">
          ☰
        </button>
      </nav>
      <style jsx>{`
        div {
          padding: 2rem;
        }
        nav {
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          text-transform: uppercase;
          font-family: var(--heading-font-family);
        }
        p {
          font-weight: 700;
          font-size: 3rem;
          margin: 0;
        }
        ul {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: ${extendMenu ? "180px" : "0"};
          transition: height 0.3s ease-in-out;
          margin-bottom: 2rem;
        }
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.8rem;
          font-size: 1.3rem;
          letter-spacing: -0.05rem;
        }
        button {
          border: none;
          color: rgb(var(--foreground-rgb));
          font-size: 2rem;
        }
        @media (min-width: 400px) {
          div {
            padding: 2rem 0;
          }
        }
        @media (min-width: 900px) {
          div {
            padding: 8.5rem 0;
          }
          nav {
            flex-direction: row;
          }
          ul {
            flex-direction: row;
            height: auto;
            margin-bottom: 0;
          }
          button {
            display: none;
          }
        }
        @media (min-width: 1050px) {
          p {
            font-size: 3.6rem;
          }
          li {
            margin: 1.5rem;
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

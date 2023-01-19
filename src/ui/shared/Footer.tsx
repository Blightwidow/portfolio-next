import * as React from "react"

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className="container">
      <style jsx>{`
        footer {
          padding: 30px 0;
        }
        @media (min-width: 550px) {
          footer {
            padding: 60px 0;
          }
        }
      `}</style>
    </footer>
  )
}

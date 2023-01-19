import * as React from "react"

export const Spacer: React.FunctionComponent<{ units?: number}> = ({ units = 1 }) => {
  return (
    <div>
      <style jsx>{`
        div {
          height: ${units}rem;
        }
      `}</style>
    </div>
  )
}

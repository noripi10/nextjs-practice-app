import React from 'react'

type Props = {
  text: string
}

export const TestComponent: React.VFC<Props> = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

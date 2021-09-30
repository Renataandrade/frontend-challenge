import React from 'react'

export const Container: React.FC = (
  props
): JSX.Element => {
  return (
    <div className="row m-1 justify-content-center border rounded-3">
      {props.children}
    </div>
  )
}
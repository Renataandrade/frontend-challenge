import React from 'react'

interface ContainerProps {
  children: React.ReactChild
}

export const Container = (props :ContainerProps) => {
  return (
    <div className="row m-1 justify-content-center border rounded-3">
      {props.children}
    </div>
  )
}
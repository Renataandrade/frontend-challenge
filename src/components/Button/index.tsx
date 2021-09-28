import React from 'react'

interface ButtonProps {
  id: string
  type: 'button' | 'submit' | 'reset'
  children: React.ReactChild
  color: 'primary' | 'secondary' | 'info' | 'danger'
  size?: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      id={props.id} 
      type={props.type} 
      className={
        `btn btn-sm btn-${props.color}
        text-white col-${props.size}`
      }
    >
      {props.children}
    </button>
  )
}
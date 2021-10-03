import React from 'react'

interface IButton {
  id: string
  type: 'button' | 'submit' | 'reset'
  children: React.ReactChild
  color: 'primary' | 'secondary' | 'info' | 'danger'
  size?: string
  disabled?: boolean
  onClick?: () => void
}

export const Button: React.FC<IButton> = (
  props
): JSX.Element => {
  const size = props.size ? `col-${props.size}` : ''

  return (
    <button
      data-testid={props.id} 
      type={props.type} 
      className={
        `btn btn-sm btn-${props.color}
        text-white ${size}`
      }
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
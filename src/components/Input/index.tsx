import React from 'react'

interface InputProps {
  id: string,
  type: string,
  label: string
}

export const Input = (props: InputProps) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id} className="small form-label">
        {props.label}
      </label>
      <input 
        type={props.type} 
        className="form-control" 
        id={props.id}
      />
    </React.Fragment>
  )
}
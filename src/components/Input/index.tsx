import React from 'react'
import { Field } from 'formik'

interface IInput {
  id: string
  type: string
  label: string
  name: string
  value: string
  error?: string
}

export const Input: React.FC<IInput> = (
  props
): JSX.Element => {
  return (
    <>
      <label htmlFor={props.id} className="small form-label">
        {props.label}
      </label>
      <Field
        className="form-control"
        id={props.id}
        type={props.type} 
        name={props.name}
        value={props.value}
      />
      {props.error && <p className="text-danger small">{props.error}</p>}
    </>
  )
}
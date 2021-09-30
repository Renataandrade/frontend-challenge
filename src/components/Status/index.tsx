import React from 'react'

export type StatusType = 'warning' | 'danger' | 'success'

interface IStatus {
  title: string
  type: StatusType
}

export const Status: React.FC<IStatus> = (
  props
): JSX.Element => {
  return (
    <div className="row d-flex justify-content-center">
      <div className={`col-md-7 col-12 bg-${props.type} rounded-3`}>
        <span className="text-center text-white">
          {props.title}
        </span>
      </div>
    </div>
  )
}
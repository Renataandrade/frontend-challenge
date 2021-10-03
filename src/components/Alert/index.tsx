import React from 'react'

export type AlertType = 'warning' | 'danger' | 'success'

export interface IAlert {
  message: string
  type: AlertType
  display: 'none' | 'block'
}

export const Alert: React.FC<IAlert> = (
  props
): JSX.Element => {
  return (
    <div className={`m-4 d-flex justify-content-center d-${props.display}`}>
      <div
        className={`alert alert-${props.type} d-flex align-items-center`} 
        role="alert"
      >
        <div>
          {props.message}
        </div>
      </div>
    </div>
  )
}
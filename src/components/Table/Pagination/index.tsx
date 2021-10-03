import React, { Dispatch, SetStateAction } from 'react'
import { Button } from 'components/Button'

interface IPagination {
  page: number
  total_pages: number
  next: Dispatch<SetStateAction<number>>
}

export const Pagination: React.FC<IPagination> = (props): JSX.Element => {
  const isButtonNextDisabled = () => {
    return props.total_pages === props.page
  }

  const isButtonPrevDisabled = () => {
    return props.total_pages > props.page
  }

  return (
    <div className="row mb-4">
      <div className="col-12 small text-center d-flex align-items-center justify-content-end">
        <Button 
          id="btn-next" 
          type="button" 
          color="secondary" 
          disabled={isButtonPrevDisabled()}
          onClick={() => props.next(props.page - 1)}
        >
          prev
        </Button>
        <span className="m-4">{props.page} de {props.total_pages}</span>
        <Button 
          id="btn-next" 
          type="button" 
          color="secondary"
          disabled={isButtonNextDisabled()}
          onClick={() => props.next(props.page + 1)}
        >
          next
        </Button>
      </div>
    </div>
  )
}
import React from 'react'
import { Button } from '../../Button'

export const Pagination: React.FC = (): JSX.Element => {
  const data = {
    "page": 1,
    "total_page": 1,
    "per_page": 5
  }
  
  const isButtonNextDisabled = () => {
    return data.total_page <= 1
  }

  const isButtonPrevDisabled = () => {
    return data.total_page <= 1
  }

  return (
    <div className="row d-flex align-items-center justify-content-end mt-4 mb-4">
      <div className="col-md-1 col-4">
        <Button 
          id="btn-next" 
          type="button" 
          color="secondary" 
          disabled={isButtonPrevDisabled()}
        >
          prev
        </Button>
      </div>
      <div className="col-md-1 col-4 small">
        {data.page} de {data.total_page}
      </div>
      <div className="col-md-1 col-4">
        <Button 
          id="btn-next" 
          type="button" 
          color="secondary"
          disabled={isButtonNextDisabled()}
        >
          next
        </Button>
      </div>
    </div>
  )
}
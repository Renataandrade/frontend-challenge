import React from 'react'
import { useHistory } from 'react-router'
import { Button } from 'components'

export const PageNotFound: React.FC = (): JSX.Element => {
  const history = useHistory()

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="flex-column">
        <div className="col-12 text-primary">
          <h3 className="text-center"><b>404</b></h3>
          <h4>Página não encontrada</h4>
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <Button
            id="btn-back"
            type="button"
            color="secondary"
            size="8"
            onClick={() => { 
              history.push('/')
            }}
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  )
}
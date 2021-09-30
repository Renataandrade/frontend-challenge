import React from 'react'
import { Link } from 'react-router-dom'

interface ITitle {
  title: string
  backToPage: string
  backToRoute: string
}

export const Title: React.FC<ITitle> = (props) => {
  return (
    <div className="container">
      <h6>
        {props.title}
        <br />
        <Link to={props.backToRoute} className="text-decoration-none">
          <small className="text-primary">
            {`< voltar para tela de ${props.backToPage}`}
          </small>
        </Link>
      </h6>
    </div>
  )
}
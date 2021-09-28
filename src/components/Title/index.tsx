import React from 'react'
import { Link } from 'react-router-dom'

interface TitleProps {
  title: string
  backToPage: string
}

export const Title = (props: TitleProps) => {
  return (
    <div className="container">
      <h6>
        {props.title}
        <br />
        <Link to="/" className="text-decoration-none">
          <small className="text-primary">
            {`< voltar para tela de ${props.backToPage}`}
          </small>
        </Link>
      </h6>
    </div>
  )
}
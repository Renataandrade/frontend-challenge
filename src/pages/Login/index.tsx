import React from 'react'
import { Form } from './Form'

export const Login = () => {
  return (
    <section className="container-fluid">
      <div className="row min-vh-100">
        <div className="col d-none d-md-block bg-image--cover" />
        <Form />
      </div>
    </section>
  )
}
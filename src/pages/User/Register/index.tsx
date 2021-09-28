import React from 'react'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { Input } from '../../../components/Input'
import { Title } from '../../../components/Title'

export const RegisterUser = () => {
  return (
    <section className="container-fluid mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-9 col-12">
          <Title
            title="Cadastro de revendedor"
            backToPage="Login"
          />
        </div>
        <div className="col-md-7 col mt-5">
          <p className="small text-muted text-center">
            Preencha os campos abaixo
          </p>
          <Container>
            <React.Fragment>
              <div className="row mt-3">

                <div className="col-12 mt-2">
                  <Input
                    id="name"
                    label="Nome completo"
                    type="text"
                  />
                </div>
                <div className="col-md-6 col-12 mt-2">
                  <Input
                    id="cpf"
                    label="CPF"
                    type="text"
                  />
                </div>
                <div className="col-md-6 col-12 mt-2">
                  <Input
                    id="email"
                    label="E-mail"
                    type="email"
                  />
                </div>
                <div className="col-md-6 col-12 mt-2">
                  <Input
                    id="password"
                    label="Senha"
                    type="password"
                  />
                </div>
                <div className="col-md-6 col-12 mt-2">
                  <Input
                    id="confirm-password"
                    label="Confirme a senha"
                    type="password"
                  />
                </div>
              </div>

              <div className="col pt-4 m-4 d-flex justify-content-md-end justify-content-center">
                <Button
                  id="btn-register"
                  color="primary"
                  type="button"
                >
                  Concluir cadastro
                </Button>
              </div>
            </React.Fragment>
          </Container>
        </div>
      </div>
    </section>
  )
}
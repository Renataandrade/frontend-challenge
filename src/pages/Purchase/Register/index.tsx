import React from 'react'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { Input } from '../../../components/Input'
import { Title } from '../../../components/Title'

export const RegisterPurchase = () => {
  return (
    <section className="container-fluid mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-9 col-12">
          <Title
            title="Cadastro de Compra"
            backToPage="Minhas Compras"
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
                    id="code"
                    label="Código do produto"
                    type="text"
                  />
                </div>
                <div className="col-md-6 col-12 mt-2">
                  <Input
                    id="price"
                    label="Valor (R$)"
                    type="text"
                  />
                </div>
                <div className="col-md-6 col-12 mt-2">
                  <Input
                    id="date_purchase"
                    label="Data da compra"
                    type="date"
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
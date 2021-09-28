import React from 'react'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { Input } from '../../../components/Input'

export const Form = () => {
  return (
    <div className="col-md-6 pt-5 d-flex justify-content-center">
      <div className="col-lg-8 col-md-8">
        <div className="col justify-content-end">
          <h6 className="text-end">
            Área exclusiva para <br/> revendedores
          </h6>
        </div>
        
        <Container>
          <div className="col-11 mt-4">  
            <p className="small text-muted text-center">Faça seu login</p>
            <Input
              id="email"
              label="E-mail"
              type="email"
            />

            <Input
              id="password"
              label="Senha"
              type="password"
            />

            <div className="col m-4 text-center">
              <p className="small">Esqueci minha senha</p>
              <Button
                id="btn-login"
                type="button"
                color="primary"
                size="10"
              >
                Acessar
              </Button>
            </div>
          </div>
        </Container>

        {/** Cadastro de revendedor */}
        <div className="col-lg-7 col mt-4 mb-3">
          <h6>
            Ainda não é um <br/> revendedor?
          </h6>
          <Button
            id="btn-register"
            type="button"
            color="primary"
            size="12"
          >
            Quero ser um revendedor
          </Button>
        </div>
      </div>
    </div>
  )
}
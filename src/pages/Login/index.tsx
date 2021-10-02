import React from 'react'
import { useHistory } from 'react-router'
import { Button } from 'components'
import { PAGES } from 'enums/pages'
import { LoginForm } from './Form'

export const Login: React.FC = (): JSX.Element => {
  const history = useHistory()
  
  return (
    <section className="container-fluid">
      <div className="row min-vh-100">
        <div className="col d-none d-md-block bg-image--cover" />

        <div className="col-md-6 pt-5 d-flex justify-content-center">
          <div className="col-lg-8 col-md-8">
            <div className="col justify-content-end">
              <h6 className="text-end">
                Área exclusiva para <br /> revendedores
              </h6>
            </div>

            <LoginForm />

            {/** Cadastro de revendedor */}
            <div className="col-lg-7 col mt-4 mb-3">
              <h6>
                Ainda não é um <br /> revendedor?
              </h6>
              <Button
                data-qa-id="Login_Button_Register"
                id="btn-register"
                type="button"
                color="secondary"
                size="12"
                onClick={() => history.push(PAGES.CREATE_USER)}
              >
                Quero ser um revendedor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
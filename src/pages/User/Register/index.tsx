import React from 'react'
import {
  Button,
  Container,
  Input,
  Title
} from '../../../components'
import { PAGES } from '../../../enums/routes'
import { Formik, Form } from 'formik'
import { FormElements, FormSchema } from './schema'

export const RegisterUser: React.FC = (): JSX.Element => {
  return (
    <section className="container-fluid mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-9 col-12">
          <Title
            title="Cadastro de revendedor"
            backToPage="Login"
            backToRoute={PAGES.LOGIN}
          />
        </div>
        <div className="col-md-7 col mt-5">
          <p className="small text-muted text-center">
            Preencha os campos abaixo
          </p>
          <Container>
            <Formik
                initialValues={FormElements}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                  console.log(values)
                }}
              >
                {({ values, errors, touched }) => (
                  <Form>
                    <div className="row mt-3">
                      <div className="col-12 mt-2">
                        <Input
                          id="name"
                          name="name"
                          label="Nome completo"
                          type="text"
                          value={values.name}
                          error={touched.name ? errors.name : ''}
                        />
                      </div>
                      <div className="col-md-6 col-12 mt-2">
                        <Input
                          id="cpf"
                          name="cpf"
                          label="CPF"
                          type="text"
                          value={values.cpf}
                          error={touched.cpf ? errors.cpf : ''}
                        />
                      </div>
                      <div className="col-md-6 col-12 mt-2">
                        <Input
                          id="email"
                          name="email"
                          label="E-mail"
                          type="email"
                          value={values.email}
                          error={touched.email ? errors.email : ''}
                        />
                      </div>
                      <div className="col-md-6 col-12 mt-2">
                        <Input
                          name="password"
                          id="password"
                          label="Senha"
                          type="password"
                          value={values.password}
                          error={touched.password ? errors.password : ''}
                        />
                      </div>
                      <div className="col-md-6 col-12 mt-2">
                        <Input
                          id="confirm-password"
                          name="confirmPassword"
                          label="Confirme a senha"
                          type="password"
                          value={values.confirmPassword}
                          error={touched.confirmPassword ? errors.confirmPassword : ''}
                        />
                      </div>
                    </div>

                    <div 
                      className="col pt-4 m-4 
                      d-flex justify-content-md-end 
                      justify-content-center"
                    >
                      <Button
                        id="btn-register"
                        color="secondary"
                        type="button"
                      >
                        Concluir cadastro
                      </Button>
                    </div>
                </Form>
              )}
            </Formik>
          </Container>
        </div>
      </div>
    </section>
  )
}
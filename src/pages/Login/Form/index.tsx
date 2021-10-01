import React from 'react'
import { Button, Container, Input } from '../../../components'
import { Formik, Form } from 'formik'
import { FormElements, FormSchema } from './schema'
import AuthService from '../../../services/AuthService'
import { IAuth } from '../../../models/Auth'
import { useHistory } from 'react-router'
import { PAGES } from '../../../enums/pages'

export const LoginForm: React.FC = (): JSX.Element => {
  const history = useHistory()

  const login = (credentials :IAuth) => {
    const Auth = new AuthService()
    Auth
    .login(credentials)
    .then(() => {
      history.push(PAGES.PURCHASE)
    })
  }

  return (
    <Container>
      <div className="col-11 mt-4">
        <p className="small text-muted text-center">
          Faça seu login
        </p>
        <Formik
          initialValues={FormElements}
          validationSchema={FormSchema}
          onSubmit={(values) => {
            login(values)
            console.log(values, 'HERE')
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              <Input
                id="email"
                name="email"
                label="E-mail"
                type ="email"
                value={values.email}
                error={touched.email ? errors.email : ''}
              />

              <Input
                id="password"
                name="password"
                label="Senha"
                type ="password"
                value={values.password}
                error={touched.password ? errors.password : ''}
              />

              <div className="col m-4 text-center">
                <p className="small">Esqueci minha senha</p>
                <Button
                  id="btn-login"
                  type="submit"
                  color="secondary"
                  size="10"
                >
                  Acessar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}
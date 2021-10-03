import React, { useState } from 'react'
import { useHistory } from 'react-router'
import {
  Button,
  Container,
  Input,
  Title,
  Alert
} from 'components'
import { PAGES } from 'enums/pages'
import { Formik, Form } from 'formik'
import { FormElements, FormSchema } from './schema'
import { IAlert } from 'components/Alert'
import { IUser } from 'models/User'
import UserService from 'services/UserService'
import { formatCPF } from 'helpers/cpf'

export const RegisterUser: React.FC = (): JSX.Element => {
  const history = useHistory()
  const [showResponse, setResponse] = useState<IAlert>({ 
    message: '',
    type: 'success', 
    display: "none"
  })

  const submit = (form :IUser) => {
    const User = new UserService()
    User
    .create(form)
    .then((res) => {
      setTimeout(() => {
        setResponse({ ...showResponse, display: "none" })
        history.push(PAGES.LOGIN)
      }, 2000); 
      setResponse({
        message: res.message,
        type: 'success',
        display: 'block'
      })
    })
    .catch(() => {
      setResponse({
        message: 'Ocorreu um erro, tente novamente.',
        type: 'danger',
        display: 'block'
      })
    })
  }

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
                onSubmit={(values, { resetForm }) => {
                  Reflect.deleteProperty(values, 'confirmPassword')
                  submit(values)
                  resetForm()
                }}
              >
                {({ values, errors, touched, setValues }) => (
                  <Form>
                    <div className="row mt-3">
                      <div className="col-12 mt-2">
                        <Input
                          id="Register_Input_Name"
                          name="name"
                          label="Nome completo"
                          type="text"
                          value={values.name}
                          error={touched.name ? errors.name : ''}
                        />
                      </div>
                      <div className="col-md-6 col-12 mt-2">
                        <Input
                          id="Register_Input_CPF"
                          name="cpf"
                          label="CPF"
                          type="text"
                          value={values.cpf}
                          error={touched.cpf ? errors.cpf : ''}
                          onChange={() => {
                            setValues({ ...values, cpf: formatCPF(values.cpf)})
                          }}
                        />
                      </div>
                      <div className="col-md-6 col-12 mt-2">
                        <Input
                          id="Register_Input_Email"
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
                          id="Register_Input_Password"
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

                    <Alert
                      type={showResponse.type}
                      message={showResponse.message}
                      display={showResponse.display}
                    />

                    <div 
                      className="col pt-4 m-4 
                      d-flex justify-content-md-end 
                      justify-content-center"
                    >
                      <Button
                        id="RegisterForm_Button_Cadastrar"
                        color="secondary"
                        type="submit"
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
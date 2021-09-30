import React from 'react'
import {
  Button,
  Container,
  Input,
  Title
} from '../../../components'
import { Formik, Form } from 'formik'
import { PAGES } from '../../../enums/pages'
import { FormElements, FormSchema } from './schema'

export const RegisterPurchase: React.FC = (): JSX.Element => {
  return (
    <section className="container-fluid mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-9 col-12">
          <Title
            title="Cadastro de Compra"
            backToPage="Minhas Compras"
            backToRoute={PAGES.PURCHASE}
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
                        id="code"
                        name="code"
                        label="Código da compra"
                        type="text"
                        value={values.code}
                        error={touched.code ? errors.code : ''}
                      />
                    </div>
                    <div className="col-md-6 col-12 mt-2">
                      <Input
                        id="price"
                        name="price"
                        label="Valor (R$)"
                        type="text"
                        value={values.price}
                        error={touched.price ? errors.price : ''}
                      />
                    </div>
                    <div className="col-md-6 col-12 mt-2">
                      <Input
                        id="date_purchase"
                        name="date_purchase"
                        label="Data da compra"
                        type="date"
                        value={values.date_purchase}
                        error={touched.date_purchase ? errors.date_purchase : ''}
                      />
                    </div>
                  </div>

                  <div 
                    className="col pt-4 m-4 d-flex 
                    justify-content-md-end 
                    justify-content-center"
                  >
                    <Button
                      id="btn-register"
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
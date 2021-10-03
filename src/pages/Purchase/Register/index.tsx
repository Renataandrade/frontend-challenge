import React, { useState } from 'react'
import {
  Alert,
  Button,
  Container,
  Input,
  Title
} from 'components'
import { Formik, Form } from 'formik'
import { PAGES } from 'enums/pages'
import { FormElements, FormSchema } from './schema'
import { IPurchase } from 'models/Purchase'
import { IAlert } from 'components/Alert'
import { Currency } from 'helpers/currency'
import PurchaseSevice from 'services/PurchaseService'

export const RegisterPurchase: React.FC = (): JSX.Element => {
  const [showResponse, setResponse] = useState<IAlert>({ 
    message: '',
    type: 'success', 
    display: "none"
  })

  const submit = (form :IPurchase) => {
    const Purchase = new PurchaseSevice()
    Purchase
    .create(form)
    .then(() => {
      setTimeout(() => {
        setResponse({ ...showResponse, display: "none" })   
      }, 2000); 
      setResponse({
        message: 'Sua compra foi cadastrada!',
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
              onSubmit={(values, { resetForm }) => {
                submit({ ...values, price: Number(values.price)})
                resetForm()
              }}
            >
              {({ values, errors, touched, setValues }) => (
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
                        type="number"
                        value={values.price}
                        error={touched.price ? errors.price : ''}
                        onChange={() => setValues({ 
                          ...values, 
                          price: Currency.convertToBRLWithoutSymbol(String(values.price))
                        })}
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
                  
                  <Alert
                    type={showResponse.type}
                    message={showResponse.message}
                    display={showResponse.display}
                  />
                  
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
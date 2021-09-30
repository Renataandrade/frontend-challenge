import * as yup from 'yup'

export const FormElements = {
  code: '',
  price: '',
  date_purchase: ''
}

export const FormSchema = yup.object().shape({
  ...FormElements,
  code: yup.string().required('Este campo é obrigatório'),
  price: yup.string().required('Este campo é obrigatório'),
  date_purchase: yup.string().required('Este campo é obrigatório')
})
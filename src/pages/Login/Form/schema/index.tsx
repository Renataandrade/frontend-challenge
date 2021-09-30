import * as yup from 'yup'

export const FormElements = {
  email: '',
  password: ''
}

export const FormSchema = yup.object().shape({
  ...FormElements,
  email: yup.string().email('E-mail inválido').required('Este campo é obrigatório'),
  password: yup.string().required('Este campo é obrigatório'),
})
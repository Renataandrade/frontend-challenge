import * as yup from 'yup'

export const FormElements = {
  name: '',
  cpf: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const FormSchema = yup.object().shape({
  ...FormElements,
  name: yup.string().required('Este campo é obrigatório'),
  cpf: yup.string().required('Este campo é obrigatório'),
  email: yup.string().email('E-mail inválido').required('Este campo é obrigatório'),
  password: yup.string().required('Este campo é obrigatório'),
  confirmPassword: yup.string().test(
    'match', 
    'As senhas não estão iguais', 
    function(value){
      return this.parent.password === value
    })
    .required('Este campo é obrigatório')
})
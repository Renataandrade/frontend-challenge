import React from 'react'
import { Provider } from 'react-redux'
import { fireEvent, render, waitFor } from '@testing-library/react';
import { AxiosResponse } from 'axios';

import { store } from '../../../store/root';
import { PAGES } from '../../../enums/pages';
import { IAuthResponse } from '../../../models/Auth';
import RequestAdapter from '../../../adapters/RequestAdapter';
import { METHOD } from '../../../enums/method';
import { Login } from '../'

const mockHistory = jest.fn()
jest.mock('react-router', () => {
  const module = jest.requireActual('react-router')
  return {
    ...module,
    useHistory: () => ({
      push: mockHistory
    })
  }
});
jest.mock('axios')

const config = {
  method: METHOD.GET,
  url: 'teste'
}
const axiosResponse: AxiosResponse = {
  data: [],
  status: 200,
  statusText: '200',
  headers: {
    'Content-Type': 'application/json'
  },
  config: config
}

describe('Testando página de Login', () => {
  const createComponent = () => {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }

  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('Deve efetuar login com sucesso, e redirecionar para Minhas Compras', async () => {
    const spyOnRequest = jest
      .spyOn(RequestAdapter, 'request')
      .mockImplementation((): Promise<AxiosResponse<IAuthResponse>> => {
        return Promise.resolve({
          ...axiosResponse,
          data: { token: 'token-de-teste' }
        })
      })

    const component = render(createComponent())
    const emailInput = component.queryByTestId('LoginForm_Input_Email')
    const passwordInput = component.queryByTestId('LoginForm_Input_Password')
    const loginButton = component.queryByTestId('LoginForm_Button_Login')

    await waitFor(() => {
      fireEvent.change(emailInput, {
        target: {
          value: 'johndoe@mail.com'
        }
      })
    })

    await waitFor(() => {
      fireEvent.change(passwordInput, {
        target: {
          value: '123'
        }
      })
    })

    await waitFor(() => {
      fireEvent.submit(loginButton)
    })

    expect(emailInput).toHaveValue('johndoe@mail.com')
    expect(passwordInput).toHaveValue('123')
    expect(spyOnRequest).toHaveBeenCalled()
    expect(mockHistory).toHaveBeenCalled()
    expect.assertions(4)
  })

  it('Deve não conseguir efetuar login, sem preencher senha', async () => {
    const spyOnRequest = jest.spyOn(RequestAdapter, 'request')
    const component = render(createComponent())
    const emailInput = component.queryByTestId('LoginForm_Input_Email')
    const passwordInput = component.queryByTestId('LoginForm_Input_Password')
    const loginButton = component.queryByTestId('LoginForm_Button_Login')

    await waitFor(() => {
      fireEvent.change(emailInput, {
        target: {
          value: 'johndoe@mail.com'
        }
      })
    })

    await waitFor(() => {
      fireEvent.submit(loginButton)
    })

    const passwordErrorMessage = component.queryByTestId('Input_ErrorMessage')

    expect(emailInput).toHaveValue('johndoe@mail.com')
    expect(passwordInput).toHaveValue('')
    expect(passwordErrorMessage).toHaveTextContent('Este campo é obrigatório')
    expect(spyOnRequest).not.toHaveBeenCalled()
    expect.assertions(4)
  })

  it('Deve não conseguir efetuar login, sem preencher email', async () => {
    const spyOnRequest = jest.spyOn(RequestAdapter, 'request')
    const component = render(createComponent())
    const emailInput = component.queryByTestId('LoginForm_Input_Email')
    const passwordInput = component.queryByTestId('LoginForm_Input_Password')
    const loginButton = component.queryByTestId('LoginForm_Button_Login')

    await waitFor(() => {
      fireEvent.change(passwordInput, {
        target: {
          value: '123'
        }
      })
    })

    await waitFor(() => {
      fireEvent.submit(loginButton)
    })

    const emailErrorMessage = component.queryByTestId('Input_ErrorMessage')

    expect(emailInput).toHaveValue('')
    expect(passwordInput).toHaveValue('123')
    expect(emailErrorMessage).toHaveTextContent('Este campo é obrigatório')
    expect(spyOnRequest).not.toHaveBeenCalled()
    expect.assertions(4)
  })

  it('Deve informar os campos obrigatórios, quando der submit vazio', async () => {
    const component = render(createComponent())
    const emailInput = component.queryByTestId('LoginForm_Input_Email')
    const passwordInput = component.queryByTestId('LoginForm_Input_Password')
    const loginButton = component.queryByTestId('LoginForm_Button_Login')

    await waitFor(() => {
      fireEvent.change(passwordInput, {
        target: {
          value: ' '
        }
      })
    })

    await waitFor(() => {
      fireEvent.submit(loginButton)
    })

    const emailErrorMessage = component.queryByTestId('Input_ErrorMessage')
    const passwordErrorMessage = component.queryByTestId('Input_ErrorMessage')

    expect(emailInput).toHaveValue('')
    expect(passwordInput).toHaveValue(' ')
    expect(emailErrorMessage).toHaveTextContent('Este campo é obrigatório')
    expect(passwordErrorMessage).toHaveTextContent('Este campo é obrigatório')
    expect.assertions(4)
  })

  it('Deve clicar no botão e redirecionar para cadastro de usuário', () => {
    const component = render(createComponent())
    const registerButton = component.queryByTestId('Login_Button_Register')

    fireEvent.click(registerButton)

    expect(mockHistory).toHaveBeenCalledWith(PAGES.CREATE_USER)
    expect.assertions(1)
  })
})
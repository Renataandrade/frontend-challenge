import React from 'react'
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme'
import { store } from '../../../store/root';
import { act } from 'react-dom/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Login } from '../'
import { PAGES } from '../../../enums/pages';

Enzyme.configure({ adapter: new Adapter() })

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

  it('Deve clicar no botão e redirecionar para cadastro', () => {
    const component = mount(createComponent())
    const registerButton = component.findWhere(
      (n) => {
        return n.prop('data-qa-id') === 'Login_Button_Register'
      }
    )
    
    act(() => {
      registerButton.prop('onClick')()
    })
    component.update()

    expect(mockHistory).toHaveBeenCalledWith(PAGES.CREATE_USER)
  })
})
import RequestAdapter from "../adapters/RequestAdapter"
import StorageAdapter from "../adapters/StorageAdapter"

import { ENDPOINTS } from "../enums/endpoints"
import { METHOD } from "../enums/method"
import { IAuth, IAuthResponse } from "../models/Auth"

class AuthService {
  
  /**
   * Authenticate User
   * 
   * @param credentials 
   * @returns {Promise<IAuthResponse>}
   */
  public login = async (
    credentials: IAuth
  ): Promise<IAuthResponse> => {
    return await RequestAdapter.request<IAuthResponse>({
      url: ENDPOINTS.LOGIN,
      method: METHOD.GET,
      data: credentials
    })
    .then((res) => {
      StorageAdapter.setItem('token', res.data.token)
      return res.data
    })
  }

  /**
   * Unauthenticate User
   * 
   * @returns {Promise<IAuthResponse>}
   */
  public logout = async (): Promise<IAuthResponse> => {
    return await RequestAdapter.request<IAuthResponse>({
      url: ENDPOINTS.LOGOUT,
      method: METHOD.GET
    })
    .then((res) => {
      StorageAdapter.setItem('token', '')
      return res.data
    })
  }

  /**
   * Checks if it has 
   * been authenticated
   * 
   * @returns {boolean}
   */
  public isAuthenticated = (): boolean => {
    return (
      StorageAdapter.getItem('token') !== null && 
      StorageAdapter.getItem('token') !== ''
    )
  }
}

export default AuthService
import RequestAdapter from "../adapters/RequestAdapter"
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
      return res.data
    })
  }
}

export default AuthService
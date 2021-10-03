import RequestAdapter from "../adapters/RequestAdapter"
import { ENDPOINTS } from "../enums/endpoints"
import { METHOD } from "../enums/method"
import { IUser, IUserResponse } from "../models/User"

class UserService {

  /**
   * Create a user
   * 
   * @param {IUser} user 
   * @returns {Promise<IUserResponse>}
   */
  public create = async (
    user: IUser
  ): Promise<IUserResponse> => {
    return await RequestAdapter.request<IUserResponse>({
      url: ENDPOINTS.CREATE_USER,
      method: METHOD.GET,
      data: user
    })
    .then(res => {
      return res.data
    })
  }
}

export default UserService
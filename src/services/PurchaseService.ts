import RequestAdapter from "../adapters/RequestAdapter"
import { ENDPOINTS } from "../enums/endpoints"
import { METHOD } from "../enums/method"
import { IPurchase, IPurchaseResponse } from "../models/Purchase"

class PurchaseSevice {
  
  /**
   * Create a purchase
   * 
   * @param {IPurchase} params 
   * @returns {Promise<IPurchaseResponse>}
   */
  public create = async (
    params :IPurchase
  ): Promise<IPurchaseResponse> => {
    return await RequestAdapter.request<IPurchaseResponse>({
      url: ENDPOINTS.CREATE_PURCHASE,
      method: METHOD.GET,
      data: params
    })
    .then(res => res.data)
  }

  /**
   * Fetch purchases by page
   * 
   * @param {number} page 
   * @returns {Promise<IPurchaseResponse>}
   */
  public fetchByPage = async (
    page: number
  ): Promise<IPurchaseResponse> => {
    return await RequestAdapter.request<IPurchaseResponse>({
      url: `${ENDPOINTS.LIST_PURCHASE}${page}`,
      method: METHOD.GET
    })
    .then(res => res.data)
  }
}

export default PurchaseSevice
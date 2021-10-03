import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class RequestAdapter {
  private static Axios = axios.create({
    baseURL: process.env.REACT_APP_PUBLIC_URL,
    headers: { 'Content-Type': 'application/json' }
  });

  /**
   * Send all requests to API
   * 
   * @param {AxiosRequestConfig} config
   * @returns {Promise<AxiosResponse<T>>}
   */
  public static request<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return RequestAdapter.Axios.request<T>(config)
  }
}

export default RequestAdapter
export interface IAuth {
  email: string
  password: string
}

export interface IAuthResponse {
  token: string
}

export interface IAuthStore {
  isAuthenticated: boolean
}
export type FallbackType = 'pageNotFound'

export interface IFallbacks {
  pageNotFound: React.ReactElement
}

export interface IFallbackStore {
  page?: FallbackType
}
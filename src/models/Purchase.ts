export type Aprovado = 'APROVADO'
export type Andamento = 'EM_VALIDACAO'
export type Reprovado = 'REPROVADO'

export type PurchaseStatus = Aprovado | Andamento | Reprovado

export interface IPurchase {
  code: string
  price: number
  date_purchase: string
}

export interface IPurchaseList {
  code: string
  price: number
  date_purchase: string
  percent_cashback: number
  cashback: number
  status: PurchaseStatus
}

export interface IPurchaseResponse {
  data: IPurchaseList[]
  page: number
  per_page: number
  total_pages: number
}

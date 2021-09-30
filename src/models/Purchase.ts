export type Aprovado = 'APROVADO'
export type Andamento = 'EM_ANDAMENTO'
export type Reprovado = 'REPROVADO'

export type PurchaseStatus = Aprovado | Andamento | Reprovado

export interface IPurchase {
  id: string,
  price: number
  date_purchase: string
  percent_cashback: number
  cashback: number
  status: PurchaseStatus
}
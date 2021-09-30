import * as IStatus from "../models/Purchase"

export const APROVADO: IStatus.Aprovado = 'APROVADO'
export const EM_ANDAMENTO: IStatus.Andamento = 'EM_ANDAMENTO'
export const REPROVADO: IStatus.Reprovado = 'REPROVADO'

export const STATUS = Object.freeze({
  [APROVADO]: 'Aprovado',
  [EM_ANDAMENTO]: 'Em validação',
  [REPROVADO]: 'Reprovado'
})
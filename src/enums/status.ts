import * as IStatus from "../models/Purchase"

export const APROVADO: IStatus.Aprovado = 'APROVADO'
export const EM_VALIDACAO: IStatus.Andamento = 'EM_VALIDACAO'
export const REPROVADO: IStatus.Reprovado = 'REPROVADO'

export const STATUS = Object.freeze({
  [APROVADO]: 'Aprovado',
  [EM_VALIDACAO]: 'Em validação',
  [REPROVADO]: 'Reprovado'
})
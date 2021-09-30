import React from 'react'
import { Columns } from './Columns'
import { Pagination } from './Pagination'

interface ITable {
  columns: string[]
}

export const Table: React.FC<ITable> = (
  props
): JSX.Element => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="table-responsive">
        <table className="table table-hover align-middle small text-center">
          <Columns columns={[
            'Código', 
            'Valor(R$)', 
            'Data de Compra', 
            '% Cashback',
            'Cashback (R$)',
            'Situação do cadastro'
          ]}
          />
          <tbody>
            {props.children}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  )
}
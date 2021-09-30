import React from 'react'
import { Table } from '../../../../components'
import { IPurchase } from '../../../../models/Purchase'
import { Rows } from './Row'

interface ITable {
  purchases: IPurchase[]
}

export const TableList: React.FC<ITable> = (
  props
): JSX.Element => {
  const { purchases } = props
  
  return (
    <div className="row d-flex justify-content-center">
      <Table
        columns={[
          'Código',
          'Valor(R$)',
          'Data de Compra',
          '% Cashback',
          'Cashback (R$)',
          'Situação do cadastro'
        ]}
      >
        {purchases.map((row, key) => {
          return (      
            <Rows
              key={key}
              data={row}
            />
          )
        })}
      </Table>
    </div>
  )
}
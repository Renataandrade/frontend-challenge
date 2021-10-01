import React, { useEffect, useState } from 'react'
import { Table, Pagination } from '../../../../components'
import PurchaseSevice from '../../../../services/PurchaseService'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { fetchPurchase } from '../../../../store/purchase'
import { Rows } from './Row'

export const TableList: React.FC = (): JSX.Element => {
  const Purchase = new PurchaseSevice()
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()
  const purchases = useAppSelector((state) => state.purchase)

  useEffect(() => {
    Purchase.fetchByPage(page)
    .then(res => {
      dispatch(fetchPurchase(res))
    })
  }, [page])
  
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
        {purchases.data.map((row, key) => {
          return (
            <Rows
              key={key}
              data={row}
            />
          )
        })}
      </Table>

      <Pagination
        page={purchases.page}
        total_pages={purchases.total_pages}
        next={setPage}
      />
    </div>
  )
}